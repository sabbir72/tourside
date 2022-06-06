import "./header.css"

const Header = () => {
  return (
    <div className='header' >
      <div className="headerTitles">
          <span className='tsm'>Travel Blogs</span>
          <span className='tlg'>MIND FRESH TRAVELLING</span>
      </div>
      <img className='headerImg' src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873" alt="" srcset="" />
    </div>
  )
}

export default Header