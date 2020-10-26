# PetGallery (PWA/React/GraphQL/JWT)

Simple pet gallery that consumes graphQL. This application is intended for mobile devices. For a better user experience, please use your cell phone.

![Website Gif](https://thumbs.gfycat.com/PerfectCelebratedEagle-size_restricted.gif)

[Click here to see a preview! ](https://sample-front.powerofmax.vercel.app/)

## Tree

The backend is located in the API folder.

```
├── api
│   ├── assets
│   └── models
├── cypress
│   ├── integration
│   │   └── petgallery
│   ├── plugins
│   └── screenshots
│       └── All\ Specs
└── src
    ├── assets
    ├── components
    │   ├── Category
    │   ├── FavButton
    │   ├── Layout
    │   ├── ListOfCategories
    │   ├── ListOfFavs
    │   ├── ListOfPhotoCards
    │   ├── Logo
    │   ├── NavBar
    │   ├── PhotoCard
    │   ├── SubmitButton
    │   └── UserForm
    ├── container
    ├── hoc
    ├── hooks
    ├── pages
    └── styles
```

### Steps to setup the project

1. `npm install or yarn install`
2. `cp env-example .env` (Change the values in the env file)
2. `npm run dev` (for development mode)
3. To test the PWA functionality you can use `npm run serve:dev`
