import styled from "styled-components";

export const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  background: rgba(0,0,0,0);
  .hero-text{
    & > p{
      font-size: 1.8rem;
    }
    h1{
      font-size: 7rem;
    }

    h3{
      color:var(--green);
      margin: 1rem 0;
    }

    
    p.small-resume {
      margin-bottom: 5rem;
    }
  }
// New added
  .social-media{
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-top:5rem;
    padding-left:1rem;

    img,span{
      font-size: 3rem;
      width: 3.5rem;
    }
  }


  .button{
    margin-top: 5rem;
    padding: 1.4rem 6rem;
  }

  .hero-image{
    img{
      max-width: 500px;
    }
  }


  @media(max-width: 960px){
    display: block;
    margin-top: 15%;
    padding: 0 2rem;
    gap: 4rem;
    
    .hero-text{
      h1{
        font-size: 5rem;
      }
    }
    
    .hero-image{
      display: none;
    }
  }

  @media(max-width: 600px){
    margin-top: 35%;
    padding: 0 1.5rem;
    
    .hero-text{
      h1{
        font-size: 4rem;
      }
      
      h3{
        font-size: 2rem;
      }

      p{
        font-size: 1.6rem;
      }

      .button{
        margin-top: 3rem;
        padding: 1.2rem 4rem;
        font-size: 1.4rem;
      }
    }

    .social-media{
      padding-top: 3rem;
      gap: 0.8rem;
      
      img, span{
        width: 3rem;
      }
    }
  }

  @media(max-width: 480px){
    margin-top: 45%;
    
    .hero-text{
      h1{
        font-size: 3.5rem;
      }
      
      h3{
        font-size: 1.8rem;
      }

      p{
        font-size: 1.5rem;
      }

      p.small-resume{
        margin-bottom: 3rem;
      }

      .button{
        padding: 1rem 3rem;
      }
    }

    .social-media{
      padding-top: 2rem;
      
      img, span{
        width: 2.5rem;
      }
    }
  }
`