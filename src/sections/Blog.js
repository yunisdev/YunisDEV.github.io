import React, { useState,useEffect } from 'react'
import { Section, SectionPart as Part } from '../components/Section'
import axios from 'axios'
import { parseString } from 'xml2js'

const Blog = () => {
    const [posts, setPosts] = useState([])

    

    useEffect(()=>{
        axios.get('https://cors-anywhere.herokuapp.com/https://medium.com/feed/@yunisdev', {
            headers: {
                'Content-Type': 'application/xml',
                'Accept': 'application/xml',
            }
        })
            .then(response => {
                parseString(response.data, (err, res) => {
                    setPosts(res.rss.channel[0].item)
                })
            })
            .catch(err => {
                console.log(err)
            })
    },[])

    return (
        <Section id="blog" header="Blog">
            <Part aos="fade-right">
                {posts.toString()}
            </Part>
        </Section>
    )
}

export default Blog