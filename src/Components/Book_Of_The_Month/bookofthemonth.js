import React, {Component} from 'react';
import FourWinds from './the_four_winds.jpg';
import IfYouTell from './if_you_tell.jpg';
import LastLetter from './last_letter.jpg';
import Fires from './little_fires_everywhere.jpg';
import LostFound from './lost_and_found.jpg';
import MemoryKeeper from './memory_keeper.jpg';
import GuestList from './the_guest_list.jpg';
import SilentPatient from './The_Silent_Patient.jpg';
import ThreeWomen from './three_women.jpg';
import Crawdads from './where_the_crawdads_sing.jpg';
import NoOne from './when_no_one_is_watching.jpg';


import './bookofthemonth.css';

class BookOfTheMonth extends Component{
    constructor(props){
        super(props);
        this.state = {
            bookData: [
                // {
                //     id: ,
                //     month: ,
                //     title: ,
                //     author: ,
                //     image: ,
                //     summary:  
                //   },
                 {
                    id: 11,
                    month: "June 2021",
                    title: 'When No One Is Watching',
                    author: 'Alyssa Cole',
                    image: NoOne,
                    summary: 'Sydney Green is Brooklyn born and raised, but her beloved neighborhood seems to change every time she blinks. Condos are sprouting like weeds, FOR SALE signs are popping up overnight, and the neighbors she’s known all her life are disappearing. To hold onto her community’s past and present, Sydney channels her frustration into a walking tour and finds an unlikely and unwanted assistant in one of the new arrivals to the block—her neighbor Theo. But Sydney and Theo’s deep dive into history quickly becomes a dizzying descent into paranoia and fear. Their neighbors may not have moved to the suburbs after all, and the push to revitalize the community may be more deadly than advertised. When does coincidence become conspiracy? Where do people go when gentrification pushes them out? Can Sydney and Theo trust each other—or themselves—long enough to find out before they too disappear?' 
                  },
                {
                    id: 10,
                    month: "May 2021",
                    title: "The Four Winds",
                    author: "Kristin Hannah",
                    image: FourWinds,
                    summary: 'Texas, 1934. Millions are out of work and a drought has broken the Great Plains. Farmers are fighting to keep their land and their livelihoods as the crops are failing, the water is drying up, and dust threatens to bury them all. One of the darkest periods of the Great Depression, the Dust Bowl era, has arrived with a vengeance. In this uncertain and dangerous time, Elsa Martinelli—like so many of her neighbors—must make an agonizing choice: fight for the land she loves or go west, to California, in search of a better life. The Four Winds is an indelible portrait of America and the American Dream, as seen through the eyes of one indomitable woman whose courage and sacrifice will come to define a generation.'
                  },
                  {
                      id: 9,
                      month: "April 2021",
                      title: "Three Women",
                      author: "Lisa Taddeo",
                      image: ThreeWomen,
                      summary: "A riveting true story about the sex lives of three real American women, based on nearly a decade of reporting. Lina, a young mother in suburban Indiana whose marriage has lost its passion, reconnects with an old flame through social media and embarks on an affair that quickly becomes all-consuming."
                  },
                  {
                    id: 8,
                    month: "March 2021",
                    title: "The Last Letter From Your Lover",
                    author: "Jojo Moyes",
                    image: LastLetter,
                    summary: "A Brief Encounter for our time, The Last Letter from Your Lover is a sophisticated, spellbinding double love story that spans decades and thrillingly evokes a bygone era. In 1960, Jennifer Stirling wakes in the hospital and remembers nothing—not the car accident that put her there, not her wealthy husband, not even her own name. Searching for clues, she finds an impassioned letter, signed simply 'B' from a man for whom she seemed willing to risk everything. In 2003, journalist Ellie Haworth stumbles upon the letter and becomes obsessed with learning the unknown lovers’ fate—hoping it will inspire her own happy ending. Remarkably moving, this is a novel for romantics of every age."
                },
                {
                    id: 7,
                    month: "February 2021",
                    title: "The Memory Keeper",
                    author: "Jenny Hale",
                    image: MemoryKeeper,
                    summary: "Hannah Townsend has the perfect job at a New York magazine, a small but elegant apartment in the Upper West Side, and a successful beau named Miles Monahan. This year, she’s leaving the icy city sludge for sunshine! She’s got tickets for two to Barbados, and she’s meeting Miles at the airport for a week of cocktails, sandy beaches, and the music of steel drums. But her life is turned upside down in the span of that one morning. Hannah is rocked by the news that her beloved grandmother is very sick, and Hannah needs to come home to her small Tennessee town right away to be with her family and help run her gran’s dilapidated flower shop. If that isn’t enough to deal with, she discovers her boyfriend is seeing someone else. On her birthday, she finds herself packed into a car on a ride-share to her hometown of Franklin, Tennessee. When everything seems to be going wrong, it’s the kindness of a handsome man from Hannah’s past named Liam McGuire that might just save her. But a new development that threatens Gran’s shop and secrets surrounding Liam could alter both their lives forever."
                },
                {
                    id: 6,
                    month: "January 2021",
                    title: "The Silent Patient",
                    author: "Alex Michaelides",
                    image: SilentPatient,
                    summary: "Alicia Berenson’s life is seemingly perfect. A famous painter married to an in-demand fashion photographer, she lives in a grand house with big windows overlooking a park in one of London’s most desirable areas. One evening her husband Gabriel returns home late from a fashion shoot, and Alicia shoots him five times in the face, and then never speaks another word. Alicia’s refusal to talk, or give any kind of explanation, turns a domestic tragedy into something far grander, a mystery that captures the public imagination and casts Alicia into notoriety. The price of her art skyrockets, and she, the silent patient, is hidden away from the tabloids and spotlight at the Grove, a secure forensic unit in North London. Theo Faber is a criminal psychotherapist who has waited a long time for the opportunity to work with Alicia. His determination to get her to talk and unravel the mystery of why she shot her husband takes him down a twisting path into his own motivations—a search for the truth that threatens to consume him."
                },
                {
                    id: 5,
                    month: "December 2020",
                    title: "If You Tell",
                    author: "Gregg Olsen",
                    image: IfYouTell,
                    summary: "A True Story of Murder, Family Secrets, and the Unbreakable Bond of Sisterhood. After more than a decade, when sisters Nikki, Sami, and Tori Knotek hear the word mom, it claws like an eagle’s talons, triggering memories that have been their secret since childhood. Until now. For years, behind the closed doors of their farmhouse in Raymond, Washington, their sadistic mother, Shelly, subjected her girls to unimaginable abuse, degradation, torture, and psychic terrors. Through it all, Nikki, Sami, and Tori developed a defiant bond that made them far less vulnerable than Shelly imagined. Even as others were drawn into their mother’s dark and perverse web, the sisters found the strength and courage to escape an escalating nightmare that culminated in multiple murders"
                },
                {
                    id: 4,
                    month: "November 2020",
                    title: "The Book of Lost and Found",
                    author: "Lucy Foley",
                    image: LostFound,
                    summary: "Kate Darling's enigmatic mother--a once-famous ballerina--has passed away, leaving Kate bereft. When her grandmother falls ill and bequeaths to Kate a small portrait of a woman who bears a striking resemblance to Kate's mother, Kate uncovers a mystery that may upend everything she thought she knew. Kate's journey to find the true identity of the woman in the portrait takes her to some of the world's most iconic and indulgent locales, revealing a love story that began in the wild 1920s and was disrupted by war and could now spark new love for Kate. Alternating between Kate's present-day hunt and voices from the past, THE BOOK OF LOST AND FOUND casts light on family secrets and love-both lost and found."
                },
                {
                    id: 3,
                    month: "October 2020",
                    title: "The Guest List",
                    author: "Lucy Foley",
                    image: GuestList,
                    summary: "The bride ‧ The plus one ‧ The best man ‧ The wedding planner ‧ The bridesmaid ‧ The body. On an island off the coast of Ireland, guests gather to celebrate two people joining their lives together as one. The groom: handsome and charming, a rising television star. The bride: smart and ambitious, a magazine publisher. It’s a wedding for a magazine, or for a celebrity: the designer dress, the remote location, the luxe party favors, the boutique whiskey. The cell phone service may be spotty and the waves may be rough, but every detail has been expertly planned and will be expertly executed. But perfection is for plans, and people are all too human. As the champagne is popped and the festivities begin, resentments and petty jealousies begin to mingle with the reminiscences and well wishes. The groomsmen begin the drinking game from their school days. The bridesmaid not-so-accidentally ruins her dress. The bride’s oldest (male) friend gives an uncomfortably caring toast. And then someone turns up dead. Who didn’t wish the happy couple well? And perhaps more important, why?"  
                },
                {
                    id: 2,
                    month: "September 2020",
                    title: "Little Fires Everywhere",
                    author: "Celeste Ng",
                    image: Fires,
                    summary: "Little Fires Everywhere is the latest novel from bestelling author, Celeste Ng. Set in Shaker Heights, Ohio, Little Fires Everywhere tells the story of Elena Richardson, a woman who thrives on structure and rules, and her family. When Mia Warren, an artist who has been living a nomadic lifestyle as a single mother with her daughter, Pearl, arrives in town, it threatens everything that Mrs. Richardson has known. Slowly, Mia becomes the enemy of Mrs. Richardson. Meanwhile, in another part of town, close friends of the Richardsons have adopted a Chinese-American baby, which results in a custody battle. When a fire breaks out in the Richardson home, the town is buzzing with their ideas on who the suspect is."
                },
                {
                    id: 1,
                    month: "August 2020",
                    title: "Where the Crawdads Sing",
                    author: "Delia Owens",
                    image: Crawdads,
                    summary: "For years, rumors of the “Marsh Girl” haunted Barkley Cove, a quiet fishing village. Kya Clark is barefoot and wild; unfit for polite society. So in late 1969, when the popular Chase Andrews is found dead, locals immediately suspect her. But Kya is not what they say. A born naturalist with just one day of school, she takes life's lessons from the land, learning the real ways of the world from the dishonest signals of fireflies. But while she has the skills to live in solitude forever, the time comes when she yearns to be touched and loved. Drawn to two young men from town, who are each intrigued by her wild beauty, Kya opens herself to a new and startling world—until the unthinkable happens. In Where the Crawdads Sing, Owens juxtaposes an exquisite ode to the natural world against a profound coming of age story and haunting mystery. Thought-provoking, wise, and deeply moving, Owens’s debut novel reminds us that we are forever shaped by the child within us, while also subject to the beautiful and violent secrets that nature keeps. The story asks how isolation influences the behavior of a young woman, who like all of us, has the genetic propensity to belong to a group. The clues to the mystery are brushed into the lush habitat and natural histories of its wild creatures"
                } 
            ]}
    }
    render(){
        return(
            <div>
                {this.state.bookData.map((book) => (
                    <div key={book.id} className="bookCard">
                            <div classsName="picture">
                                <img src={book.image} height="300px" width="200px"/>
                            </div>
                            <div className='info'>
                                <h3>{book.month}</h3>
                                <h4>{book.title}, By: {book.author}</h4>
                                <p>{book.summary}</p>
                            </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default BookOfTheMonth