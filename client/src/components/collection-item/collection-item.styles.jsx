import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
	width: 22vw;
	display: flex;
	flex-direction: column;
	height: 350px;
	align-items: center;
	position: relative;
	&:hover {
		.image {
			opacity: 0.8;
		}
		button {
			opacity: 0.85;
			display: flex;
		}
	}

    @media screen and (max-width: 800px){
        width: 40vw;

        &:hover {
		.image {
			opacity: unset;
		}
		button {
			opacity: unset;
		}
	}
    }
`;

export const AddButton = styled(CustomButton)`
	width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 35px;
	font-size: 15px;
	text-transform: uppercase;
	font-family: 'Open Sans Condensed';
	font-weight: bolder;
	cursor: pointer;
	justify-content: center;
	background-color: white;
	color: black;
	border: 1px solid black;
	&:hover {
		background-color: black;
		color: white;
		border: none;
	}

	@media screen and (max-width: 800px){
		display: block;
		opacity: 0.7;
		min-width: unset;
		padding: 0 10px;
		&:hover {
			background-color: black;
			color: white;
			border: none;
		}
	}
`;

export const BackgroundImage = styled.div`
	width: 100%;
	height: 95%;
	background-size: cover;
	background-position: center;
	margin-bottom: 5px;
	background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
	width: 100%;
	height: 5%;
	display: flex;
	justify-content: space-between;
	font-size: 18px;
`;

export const NameContainer = styled.span`
	width: 90%;
	margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
	width: 10%;
	text-align: right;
`;
