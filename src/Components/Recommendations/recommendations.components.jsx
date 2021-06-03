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
                        <div classsName="picture">
                                <img src={book.pic} height="300px" width="200px"/>
                            </div>
                            <div className='info'>
                                <h3>{book.title}, By: {book.author}</h3>
                                <h4>Rating:{book.rating}</h4>
                                <p>{book.review}</p>
                                <p>By: {book.by}</p>
                            </div>
                    </div>
                ))}
            </div> 
            )
        }

}


export default Recommendation