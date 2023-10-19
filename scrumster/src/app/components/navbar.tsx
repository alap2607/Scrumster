import Image from "next/image";
import logo from "/public/assets/svg/scrumster-logo-color-on-transparent.svg";
import "/src/app/components/navbar.css";
export default function NavBar() {
  return (
    <>
    <nav className="nav-bar">
    <a href="#"><Image className="img" src={logo} alt="logo" /></a>
	<ul className="nav-btns">
		<li className="btn"><a href="#" className="link">Home</a></li>
		<li className="btn">
			<a href="#" className="link">Tools</a>
			{/* <ul>
				<li><a href="#">Option 1</a></li>
				<li><a href="#">Option 2</a></li>
				<li><a href="#">Option 3</a></li>
			</ul> */}
		</li>
	</ul>
</nav>
    </>
  );
}
