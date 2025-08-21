import React from "react";

const Layout = ({ children }) => {
    return (
        <div style={styles.wrapper}>
            <div style={styles.content}>{children}</div>

        </div>
    );
};

const styles = {
    wrapper: {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
    },
    content: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
    },
};

export default Layout;
