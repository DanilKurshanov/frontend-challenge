import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";


import './navigation.styles.scss';


const NavigationComponent = () => {
  return (
      <Fragment >
          <nav className={'navigation-bar'}>
              <div className={'link-container'}>
                <Link to={'/'}>Все котики</Link>
              </div>
              <div className={'link-container'}>
                <Link to={'/favorite_cats'}>Любимые котики</Link>
              </div>
          </nav>
          <Outlet />
      </Fragment>
  )
}


export default NavigationComponent;