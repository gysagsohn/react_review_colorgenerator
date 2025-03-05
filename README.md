So it has been a while since I have coded and I am trying to get back into it. As a way to refresh my knowledge and identify where my skills are lacking I am following a lecture I did during my coding bootcamp and creating a React project.

This was the Term 3 Week 8 lectures, where after we learnt all of the materials for JS and React, we put everything together to do a project in class together. So below are the notes we made for the plan for this project. 

# ColourAcademy - CSS Variable Generator WEbsite

## Routes

- "/" : homepage
    - CSS generator available here
- "/cssvariables" - CSS generator page
    - CSS generator available here
- "/generator/saved" - view list of saved themes   
    - reads Localstorage

## Contexts

- Base CSS theme
    - hex colour of new theme
- Current CSS theme
    - one theme list
    - localstorage
- List of CSS themes
    - array of theme list
    - localstorage

## Data

### Colour Object 

```JS

{

    hex: "#000000",
    strength: 100,
    rgba: [255, 255, 255, 255]

}
```

### Theme List

```JS

{

    name: "violent eggplant"
    colours: [
        Colour Ojects go here
    ]
}

```

