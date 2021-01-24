import React from 'react'
import { compose, withState, withHandlers, lifecycle } from 'recompose'
import { Context } from './Context'

const Provider = ({ children, lang, toggleLanguage }) => (
    <Context.Provider value={
        { lang, toggleLanguage: () => toggleLanguage() }
    }>
        {children}
    </Context.Provider>
)

const enhance = compose(
    withState('lang', 'handleLanguage', 'it'),
    withHandlers({
        toggleLanguage: ({ lang, handleLanguage }) => () => {
            if (lang === 'en') {
                handleLanguage('it')
                localStorage.setItem('lang', 'it')
            } else {
                handleLanguage('en')
                localStorage.setItem('lang', 'en')
            }
        }
    }),
    lifecycle({
        componentDidMount() {
            const localLang = localStorage.getItem('lang')
            if (localLang) {
                this.props.handleLanguage(localLang)
            } else {
                this.props.handleLanguage(navigator.language.split('-')[0])
            }
        }
    })
)

export default enhance(Provider)