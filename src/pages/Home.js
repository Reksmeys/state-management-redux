import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import Card from '../components/Card'
import NavBar from '../components/NavBar'
import {fetchArticles, searchArticles} from './../services/actions/articleActions'

function Home(props) {
    useEffect(() => {
        props.fetchArticles()
    }, [])

  return (
    <Container>
        <Card articles={props.articles} />
    </Container>
  )
}

// subscribe to store
const mtp = (store) => {
    return{
        articles: store.articleR.articles
    }
}
export default connect(mtp, {fetchArticles})(Home)

