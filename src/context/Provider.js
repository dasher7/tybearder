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
            console.log('LANG: ', lang, 'HANDLE LANGUAGE: ', handleLanguage)
            if (lang === 'it') {
                handleLanguage('en')
                localStorage.setItem('lang', 'en')
            } else {
                handleLanguage('it')
                localStorage.setItem('lang', 'it')
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