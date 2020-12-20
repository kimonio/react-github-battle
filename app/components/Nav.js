import React, { Component } from 'react'
import { ThemeConsumer } from '../contexts/themeContext'

class Nav extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		return (
			<ThemeConsumer>
				{({ theme, toggleTheme }) => (
					<nav className='row space-between'>
						<button
							style={{ fontSize: 30 }}
							className='btn-clear'
							onClick={toggleTheme}>
							{theme === 'light' ? '🔦' : '💡'}
						</button>
					</nav>
				)}
			</ThemeConsumer>
		)
	}
}

export default Nav
