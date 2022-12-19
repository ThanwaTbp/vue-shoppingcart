import { defineStore } from 'pinia'
import Swal from 'sweetalert2'
import products from '@/mockupdata/products'

export const useShoppingStore = defineStore('shopping', {
	// สามารถดึงตัวแปรที่หน้าไหนก็ได้
	state: () => {
		return {
			products: products,
			cartItems: []
		}
	},

	actions: {
		
		// Add to cart
		addToCart(item: any) {
			let index = this.cartItems.findIndex((product:any) => product.id == item.id)

			if(index != -1) {
				this.cartItems[index].quantity += 1
				Swal.fire({
					position: 'center',
					icon: 'success',
					title: 'Your item has been updated',
					showConfirmButton: false,
					timer: 1500
				})
			} else {
				item.quantity = 1
				this.cartItems.push(item)
				Swal.fire({
					position: 'center',
					icon: 'success',
					title: 'Your item has been updated',
					showConfirmButton: false,
					timer: 1500
				}) 
			}
		},

		// Increment Quantity
		incrementQ(item: any) {
			let index = this.cartItems.findIndex((product:any) => product.id == item.id) // เช็คว่าสินค้าตัวที่เท่าไหร่
			if(index != -1) {
				this.cartItems[index].quantity += 1
			}
		},

		// Decrement Quantity
		decrementQ(item: any) {
			let index = this.cartItems.findIndex((product:any) => product.id == item.id)
			if(index != -1) {
				this.cartItems[index].quantity -= 1
				if(this.cartItems[index].quantity == 0) {
					this.cartItems = this.cartItems.filter((product:any) => product.id != item.id)
				}
			}
		},

		// Remove Item from Cart
		removeFromCart(item:any) {
			this.cartItems = this.cartItems.filter((product:any) => product.id != item.id)
			Swal.fire({
				position: 'center',
				icon: 'success',
				title: 'Remove Success!!',
				showConfirmButton: false,
				timer: 1500
			}) 
		}
	},

	// ไว้คำนวณ
	getters: {

	}
})