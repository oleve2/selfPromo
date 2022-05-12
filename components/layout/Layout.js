import Navigation from "./Navigation";
import layout_style from './Layout.module.css';
import { Footer } from "./Footer";

export default function Layout(props) {
  return (
    <div className={layout_style.wrapper_outer}>
    <div className={layout_style.wrapper}>
      <Navigation />
      <main>
        {props.children}
      </main> 
      <Footer />
    </div>
    </div>
  );
}
