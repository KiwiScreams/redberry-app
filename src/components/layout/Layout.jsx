import "./Layout.css";
import layoutImage from "../../assets/images/layout.png"
const Layout = () => {
    return ( 
        <>
        <section className="layout-section">
            <h1>ბლოგი</h1>
            <img src={layoutImage} alt="" />
        </section>
        </>
     );
}
 
export default Layout;