import Link from 'next/link'

export function Menu() {
	return (
		<div>
			<Link href='/'>
				<a>
					Sobre Nós
				</a>
			</Link>

			<Link href='/'>
				<a>
					Pesquisas
				</a>
			</Link>

			<Link href='/'>
				<a>
					Eventos
				</a>
			</Link>
		</div>
	)
}