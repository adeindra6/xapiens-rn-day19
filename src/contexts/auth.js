import React, {createContext, PureComponent, useContext} from 'react';

const AuthContext = createContext();

class AuthProvider extends PureComponent {
    state = {
        isLogin: false,
    }

    setLogin() {
        this.setState({isLogin: true});
    }

    render() {
        const {children} = this.props;
        const {isLogin} = this.state;

        const data = {
            isLogin,
            setLogin: () => this.setLogin(),
        };

        return(
            <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
        );
    }
}

const AuthConsumer = () => useContext(AuthContext);

export {AuthContext, AuthConsumer};
export default AuthProvider;