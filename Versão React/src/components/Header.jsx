import React, { Component } from 'react'
import logoWorldNews from '../assets/logo_news.png'

class Header extends Component {
    render() {
        const { updateCategory, handleSearch, searchQuery, setSearchQuery } = this.props

        return (
            <div className='navbar navbar-expand-lg bg-body-secondary'>
                <div className='container-fluid'>
                    <a className='navbar-brand' href="#">
                        <img src={logoWorldNews} alt="World News" width={120} />
                    </a>
                    <button className='navbar-toggler' type='button' data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">

                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                            <li className='nav-item'>
                                <a className='nav-link fw-medium' href="#" onClick={() => updateCategory('general')}>General</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link fw-medium' href="#" onClick={() => updateCategory('business')}>Business</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link fw-medium' href="#" onClick={() => updateCategory('sports')}>Sports</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link fw-medium' href="#" onClick={() => updateCategory('technology')}>Technology</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link fw-medium' href="#" onClick={() => updateCategory('entertainment')}>Entertainment</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link fw-medium' href="#" onClick={() => updateCategory('health')}>Health</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link fw-medium' href="#" onClick={() => updateCategory('science')}>Science</a>
                            </li>
                        </ul>
                        <form className='d-flex' role='search' onSubmit={handleSearch}>
                            <input 
                                id='newsQuery'
                                className='form-control me-2' 
                                type='search' 
                                placeholder='Search' 
                                aria-label='Search' 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button className='btn btn-primary' type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header