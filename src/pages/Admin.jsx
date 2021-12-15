import { Link } from "react-router-dom";

const Admin = () => {

    const user = JSON.parse(localStorage.getItem('user'));

    if(!user) {
        window.location.href = '/sign-in';
    } else if(user.user.id !== 1) {
        return 'Ban khong co quyen truy cap vao khu vuc nay!'
    }

    return (
        <div>
            <ul>
                <li>
                    <Link to='/products'>Danh sach san pham</Link>
                </li>
                <li>
                    <Link to='/product/add'>Them san pham</Link>
                </li>
            </ul>
        </div>
    )
}

export default Admin;