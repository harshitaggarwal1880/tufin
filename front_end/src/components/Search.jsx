import React, { useState } from 'react'
import styled from "styled-components";
import TutorDisplay from './TutorDisplay';
import TutorSearch from './TutorSearch';


const Search = () => {
    const [namee, setname] = useState("");

  

    return (
<>
    <SearchCont> 
      
	<input
              type="text"
              className="form-control"
              placeholder="Enter email"
              value={namee}
              onChange={e => (setname( e.target.value ))}
            />
	<button >
		Search	</button>
    </SearchCont>

    <TutorSearch name={namee}/>
{/* <TutorDisplay/> */}
  </>  

  )
}


const SearchCont = styled.div`



img {
	max-width: 100%;
}

a {
	text-decoration: none;
}

body {
	min-height: 100vh;
	background: #ecf1f6;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: var(--font);
	padding: 0 1rem;
}

/* SEARCH BAR CONTAINER */
.search-local {
	width: 100%;
	max-width: 75rem;
	display: flex;
	align-items: center;
	column-gap: 2rem;
	padding-left: 2rem;
	background: var(--white);
	border-radius: 1rem;
	min-height: 7rem;
	height: auto;
	border: 0.1rem solid var(--black);
	border-right: none;
}

/* ICON */
.icon {
	color: var(--red);
	font-size: 3.5rem;
	display: flex;
	align-items: center;
	cursor: pointer;
}

.icon:hover {
	animation: funny-icon 0.4s ease-in-out;
}

@keyframes funny-icon {
	0% {
		scale: 1;
	}

	50% {
		scale: 0.8;
		transform-origin: bottom;
		transform: rotate(-15deg);
	}

	100% {
		scale: 1;
	}
}

/* INPUT */
.search-local input {
	height: 100%;
	width: 100%;
	flex: 1 1 25rem;
	background: var(--white);
	display: flex;
	outline: none;
	border: none;
	color: var(--black);
	font-size: 2.4rem;
}

input[type="text"]::placeholder {
	color: var(--black);
	font-size: 2.4rem;
}

/* BUTTON */
.search-local button {
	background: var(--red);
	border: none;
	border-radius: 0 1rem 1rem 0;
	font-weight: 500;
	font-size: 2.4rem;
	height: 7rem;
	width: 18rem;
	cursor: pointer;
	transition: all 0.3s;
	text-align: center;
}

button a {
	color: var(--white);
}

.search-local button .search-icon {
	display: none;
}

.search-local button:hover {
	letter-spacing: 0.5rem;
}

/* MEDIAS */
@media (max-width: 575px) {
	.search-local {
		padding-left: 0;
		column-gap: 0.25rem;
	}

	.search-local button {
		width: 10rem;
	}

	button a {
		display: none;
	}

	.search-local button .search-icon {
		display: block;
		margin-inline: auto;
		color: var(--white);
		font-size: 3rem;
	}

	input[type="text"]::placeholder {
		font-size: 1.7rem;
	}
}


`;

export default Search;