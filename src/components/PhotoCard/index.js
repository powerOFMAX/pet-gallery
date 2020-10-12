import React, { useState } from 'react'
import { ImgWrapper, Article, Button, Img } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [like, setLike] = useLocalStorage(`like-${id}`)
  const [show, ref] = useNearScreen()
  const Icon = like ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={ref}>
      {show && (
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <Button onClick={() => setLike(!like)}>
            <Icon size='32' /> {likes} likes!
          </Button>
        </>
      )}
    </Article>
  )
}
