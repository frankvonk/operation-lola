// create header
const Header = () => {
    return (
        <header style={styles.header}>
            <h1 style={styles.h1}>My Notes App</h1>
        </header>
    );
}

const styles = {
    header: {
        color: '#333',
        backgroundColor: '#f5f5f5',
        padding: '1rem',
        textAlign: 'center' as const,
    },
    h1: {
        color: 'red',
        margin: 0,
        fontSize: '2rem',
    },
};

export default Header;