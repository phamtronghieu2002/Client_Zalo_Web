import './Layout.scss';
import Search from '../Search/Search';
function Layout({ children,onSearch }) {
    return <div id="layout_content_phonebook">
        
        <Search
        onSearch={onSearch}
        />
        {children}
        
        </div>;
}

export default Layout;
