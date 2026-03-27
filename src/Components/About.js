import React, {useState} from 'react'

export default function About() {
    const [myStyle, setMyStyle]=useState({
        color:'black',
        backgroundColor:'black',
        border: '2px solid black'
    })

    const [btnText, setBtnText]=useState("Enable Dark Mode");

    const toggleStyle=()=>{
        if(myStyle.color==='white'){
            setMyStyle({
                color:'black',
                backgroundColor:'white',
                border:'2px solid white'
            })
            setBtnText("Enable Dark Mode");
        }
        else{
            setMyStyle({
                color:'white',
                backgroundColor:'black',
                border:'2px solid white'
            })
            setBtnText("Enable Light Mode");
        }
    };

  return (

    <div className='container' style={myStyle}>
        <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3">
            <a className="navbar-brand" href="#">Navbar</a>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <a className="nav-link" href="#scrollspyHeading1">First</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#scrollspyHeading2">Second</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#scrollspyHeading1">Third</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#scrollspyHeading2">Forth</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#scrollspyHeading1">Fifth</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#scrollspyHeading2">Sixth</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#scrollspyHeading2">Seventh</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#scrollspyHeading1">Eighth</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#scrollspyHeading2">Ninth</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#scrollspyHeading2">Tenth</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#scrollspyHeading3">First</a></li>
                        <li><a className="dropdown-item" href="#scrollspyHeading4">Second</a></li>
                        <li><a className="dropdown-item" href="#scrollspyHeading3">Third</a></li>
                        <li><a className="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
                        <li><a className="dropdown-item" href="#scrollspyHeading6">Sixth</a></li>
                        <li><a className="dropdown-item" href="#scrollspyHeading7">Seventh</a></li>
                        <li><a className="dropdown-item" href="#scrollspyHeading8">Eighth</a></li>
                        <li><a className="dropdown-item" href="#scrollspyHeading9">Ninth</a></li>
                        <li><a className="dropdown-item" href="#scrollspyHeading10">Tenth</a></li>  
                    </ul>
                </li>
            </ul>
        </nav>
        <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example p-3 rounded-2" tabIndex="0">
            <h4 id="scrollspyHeading1">First heading</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quaerat ratione accusantium dolorum. Recusandae amet laboriosam vero facere veniam provident illo nostrum ipsa suscipit quisquam deserunt, itaque nemo reiciendis tempore.</p>
            <h4 id="scrollspyHeading2">Second heading</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quaerat ratione accusantium dolorum. Recusandae amet laboriosam vero facere veniam provident illo nostrum ipsa suscipit quisquam deserunt, itaque nemo reiciendis tempore.</p>
            <h4 id="scrollspyHeading3">Third heading</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quaerat ratione accusantium dolorum. Recusandae amet laboriosam vero facere veniam provident illo nostrum ipsa suscipit quisquam deserunt, itaque nemo reiciendis tempore.</p>
            <h4 id="scrollspyHeading4">Fourth heading</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quaerat ratione accusantium dolorum. Recusandae amet laboriosam vero facere veniam provident illo nostrum ipsa suscipit quisquam deserunt, itaque nemo reiciendis tempore.</p>
            <h4 id="scrollspyHeading5">Fifth heading</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quaerat ratione accusantium dolorum. Recusandae amet laboriosam vero facere veniam provident illo nostrum ipsa suscipit quisquam deserunt, itaque nemo reiciendis tempore.</p>
            <h4 id="scrollspyHeading6">sixth heading</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quaerat ratione accusantium dolorum. Recusandae amet laboriosam vero facere veniam provident illo nostrum ipsa suscipit quisquam deserunt, itaque nemo reiciendis tempore.</p>
            <h4 id="scrollspyHeading7">Seventh heading</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quaerat ratione accusantium dolorum. Recusandae amet laboriosam vero facere veniam provident illo nostrum ipsa suscipit quisquam deserunt, itaque nemo reiciendis tempore.</p>
            <h4 id="scrollspyHeading8">Eighth heading</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quaerat ratione accusantium dolorum. Recusandae amet laboriosam vero facere veniam provident illo nostrum ipsa suscipit quisquam deserunt, itaque nemo reiciendis tempore.</p>
            <h4 id="scrollspyHeading9">Ninth heading</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quaerat ratione accusantium dolorum. Recusandae amet laboriosam vero facere veniam provident illo nostrum ipsa suscipit quisquam deserunt, itaque nemo reiciendis tempore.</p>
            <h4 id="scrollspyHeading10">Tenth heading</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quaerat ratione accusantium dolorum. Recusandae amet laboriosam vero facere veniam provident illo nostrum ipsa suscipit quisquam deserunt, itaque nemo reiciendis tempore.</p>
        </div>
        <div className="container2 my-2">
            <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
        </div>
    </div>
  )
}
