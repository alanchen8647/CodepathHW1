import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from './components/movieCard'

function App() {
  const movies = {
    movie1: {
      title: 'Avengers: Endgame',
      poster: "https://posters.movieposterdb.com/23_06/2019/4154796/l_avengers-endgame-movie-poster_21dfd2d6.jpg",
      description: 'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos\' actions and restore balance to the universe.',
      director: 'Anthony Russo, Joe Russo',
      rating: 4,
    },
    movie2: {
      title: 'The Bad Guys: Haunted Heist',
      poster: "https://xl.movieposterdb.com/25_03/2024/33130902/xl_the-bad-guys-haunted-heist-movie-poster_d6ec9600.jpg",
      description: 'The crafty Bad Guys crew embarks on a high-stakes Halloween heist to swipe a priceless amulet from a spooky mansion. What could go wrong?',
      director: 'Kevin Peaty, Christo Stamboliev',
      rating: 3,
    },
    movie3: {
      title: 'Nezha: Mo tong nao hai',
      poster: "https://posters.movieposterdb.com/25_02/2025/34956443/l_nezha-mo-tong-nao-hai-movie-poster_3e2f1d23.jpg",
      description: 'After the catastrophe, although the souls of Nezha and Aobing were saved, their bodies would soon be shattered. Taiyi Zhenren planned to use the seven-colored lotus to rebuild their bodies.',
      director: 'Yu Yang',
      rating: 4,
    },
    movie4: {
      title: 'The Shawshank Redemption',
      poster: "https://posters.movieposterdb.com/25_02/2025/10954718/s_dog-man-movie-poster_2fea2a5e.jpg",
      description: 'Dog Man, half dog and half man, he is sworn to protect and serve as he doggedly pursues the feline supervillain Petey the Cat.',
      director: 'Peter Hastings',
      rating: 3,
    },
    movie5: {
      title: 'Heart Eyes',
      poster:"https://posters.movieposterdb.com/25_02/2025/32558992/s_heart-eyes-movie-poster_93186acc.jpg",
      description: 'For the past several years, the "Heart Eyes Killer" has wreaked havoc on Valentine\'s Day by stalking and murdering romantic couples. This Valentine\'s Day, no couple is safe.',
      director: 'Josh Ruben',
      rating: 3,
    },
    movie6: {
      title: 'The Unbreakable Boy',
      poster: "https://posters.movieposterdb.com/24_12/2025/5181260/l_the-unbreakable-boy-movie-poster_2c5bccbf.jpg",
      description: 'A young boy with both a rare brittle-bone disease and autism. But what makes him truly unique is his joyous, funny, life-affirming world view that transforms and unites everyone around him.',
      director: 'Jon Gunn',
      rating: 3,
    },
    movie7: {
      title: 'Paddington in Peru',
      poster:"https://posters.movieposterdb.com/24_11/2025/5822536/l_paddington-in-peru-movie-poster_06eaea07.jpg",
      description: 'Paddington returns to Peru to visit his beloved Aunt Lucy, who now resides at the Home for Retired Bears. With the Brown family in tow, a thrilling adventure ensues when a mystery plunges them into an unexpected journey.',
      director: 'Dougal Wilson',
      rating: 3,
    },
    movie8: {
      title: 'Captain America: Brave New World',
      poster: "https://posters.movieposterdb.com/24_12/2025/14513804/l_captain-america-brave-new-world-movie-poster_d309c549.jpg",
      description: 'Sam Wilson, the new Captain America, finds himself in the middle of an international incident and must discover the motive behind a nefarious global plan.',
      director: 'Julius Onah',
      rating: 3,
    },
    movie9: {
      title: 'To Kill a Mockingbird',
      poster: "https://posters.movieposterdb.com/05_09/1962/0056592/l_50488_0056592_af1998b9.jpg",
      description: 'Atticus Finch, a widowed lawyer in Depression-era Alabama, defends a black man against an undeserved rape charge, and his children against prejudice.',
      director: 'Robert Mulligan',
      rating: 4,
    },
  }
    
  return (
    <>
    <div className='Header'>
        <h1>Movie Theater</h1>
        <h3>Now Playing</h3>
      </div>
      <div className='movies'>
        {Object.keys(movies).map((movie, index) => (
          <MovieCard  key={index} movie={movies[movie]} />
        ))}
      </div>
    </>
  )
}

export default App
