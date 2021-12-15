import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function index() {
    return (
		<div>
			<div class="flex flex-col h-screen justify-between">
				
				<Header />
				
				<main class="mb-auto">
					<Outlet />
				</main>

				<Footer />

			</div>
		</div>
	)
}
