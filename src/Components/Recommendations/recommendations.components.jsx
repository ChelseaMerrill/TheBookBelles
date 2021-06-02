import React, {Component} from 'react';

class Recommendation extends Component{
    constructor(props){
        super(props);
        this.state = { 
            allBooksData: [
                {
                    id: 1,
                    title: 'the book title',
                    author: 'author',
                    genre: 'genre',
                    rating: '5 stars',
                    review: 'write the review of the book here',
                    by: 'name',
                    summary: 'this is the bio',
                    pic: 'pic'
                },
                // {
                //     id: 1,
                //     title: 'the book title',
                //     author: 'author',
                //     genre: 'genre',
                //     rating: '5 stars',
                //     review: 'write the review of the book here',
                //     by: 'name',
                //     summary: 'this is the bio',
                //     pic: 'pic'
                // }
            ]}
        }
        // display on front of card: title, author, genre, rating, review/by, pic
        //*OnClick* display on back: sumary
        //make book searchable by title, author, genre
        //sort alphabetically
        render(){
            return(
            <div className='recomendationPage'>
                {this.state.allBooksData.map((book) => (
                    <div key={book.id} className='card'>
                        <h2>{book.title}</h2>
                    </div>
                ))}
            </div> 
            )
        }

}


export default Recommendation