import React from 'react'

const styles = {
    header: {
        maxWidth: '100%',
        height: '100px',
        backgroundColor: 'darkseagreen',
        display: 'flex',
        margin: '10px auto',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '5px',
        fontSize: '25px',
        fontWeight: 700,
    }
}

export default function Header() {
    return (
        <div className="header" style={styles.header}>
            Список задач
        </div>
    )

}

