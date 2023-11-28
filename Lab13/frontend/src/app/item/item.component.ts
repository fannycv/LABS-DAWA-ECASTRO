import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  items: any[] = [];
  currentItem: any = {};
  successMessage: string = '';
  deleteItemId: string = '';
  searchTerm: string = '';

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems().subscribe((items) => {
      this.items = items;
    });
  }

  getItemById(id: string): void {
    this.itemService.getItemById(id).subscribe((item) => {
      this.currentItem = item;
    });
  }

  createItem(item: any): void {
    this.itemService.createItem(item).subscribe(
      () => {
        this.getItems();
        this.currentItem = {};
        this.closeModal();
        this.successMessage = 'Pelicula creada exitosamente.';
        setTimeout(() => {
          this.successMessage = '';
        }, 3000);
      },
      (error) => {
        console.error('Error al agregar película:', error);
      }
    );
  }

  updateItem(id: string, item: any): void {
    this.itemService.updateItem(id, item).subscribe(
      () => {
        this.getItems();
        this.currentItem = {};
        this.closeModal();
        this.successMessage = 'Pelicula actualizada correctamente.';
        setTimeout(() => {
          this.successMessage = '';
        }, 3000);
      },
      (error) => {
        console.error('Error al actualizar película:', error);
      }
    );
  }

  deleteItem(id: string): void {
    this.itemService.deleteItem(id).subscribe(() => {
      this.getItems();
      this.successMessage = 'Pelicula eliminada correctamente.';
      setTimeout(() => {
        this.successMessage = '';
        this.closeDeleteConfirmationModal();
      }, 3000);
    });
  }

  editItem(id: string): void {
    this.getItemById(id);
    this.openModal();
  }

  deleteConfirmed(): void {
    this.items = this.items.filter((item) => item._id !== this.deleteItemId);
    this.deleteItemId = '';
  }
  // Filtrar y ordenar la lista
  get filteredItems(): any[] {
    return this.items
      .filter(
        (item) =>
          item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(this.searchTerm.toLowerCase())
      )
      .sort((a, b) => a.name.localeCompare(b.description));
  }

  sortOrder: 'asc' | 'desc' = 'asc'; // Valor predeterminado
  selectedOrder: string = 'name'; // Campo predeterminado

  sortList(orderBy: string): void {
    if (this.selectedOrder === orderBy) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.selectedOrder = orderBy;
      this.sortOrder = 'asc';
    }

    this.items.sort((a, b) => {
      const dateA = new Date(this.getFieldValue(a, this.selectedOrder));
      const dateB = new Date(this.getFieldValue(b, this.selectedOrder));

      if (this.selectedOrder === 'fecha') {
        // Comparar fechas
        return this.sortOrder === 'asc'
          ? dateA.getTime() - dateB.getTime()
          : dateB.getTime() - dateA.getTime();
      } else {
        // Comparar otros tipos de datos
        const aValue = this.getFieldValue(a, this.selectedOrder).toLowerCase();
        const bValue = this.getFieldValue(b, this.selectedOrder).toLowerCase();

        return this.sortOrder === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }
    });
  }

  getFieldValue(item: any, field: string): any {
    if (field === 'fecha') {
      return item[field];
    }

    return item[field].toLowerCase();
  }

  showModal: boolean = false;
  modalTitle: string = 'Agregar Película';

  // Función para abrir el modal
  openModal() {
    this.showModal = true;
    this.modalTitle = this.currentItem._id
      ? 'Editar Película'
      : 'Agregar Película';
  }

  // Función para cerrar el modal
  closeModal() {
    this.showModal = false;
    this.modalTitle = 'Agregar Película';
  }

  deleteConfirmationItem: any;
  showDeleteConfirmationModal: boolean = false;

  openDeleteConfirmationModal(item: any): void {
    this.deleteConfirmationItem = item;
    this.showDeleteConfirmationModal = true;
  }

  closeDeleteConfirmationModal(): void {
    this.deleteConfirmationItem = null;
    this.showDeleteConfirmationModal = false;
  }

  formatDate(date: any): string {
    if (!date || isNaN(new Date(date).getTime())) {
      return 'Fecha inválida';
    }

    return new Date(date).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  }
}
