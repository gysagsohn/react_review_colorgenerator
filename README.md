So it has been a while since I have coded and I am trying to get back into it. As a way to refresh my knowledge and identify where my skills are lacking I am following a lecture I did during my coding bootcamp and creating a React project.

This was the Term 3 Week 8 lectures, where after we learnt all of the materials for JS and React, we put everything together to do a project in class together. So below are the notes we made for the plan for this project. 

## ColourAcademy - CSS Variable Generator Website 

- [x] CSS variable export (high priority)
- [x] Fix the width of the modal 
- [ ] save themes to a list of themes (medium priority)
- [ ] preview components like UI Colours (nice-to-have)
- [x] Dark/light mode toggle in global context 
- [x] Deploy
	- [x] show the thing that Netlify needs to make React Router work 


## Routes 

- "/" : homepage
	- CSS generator available here 
- "/generator" - CSS generator page 
	- CSS generator available here 
- "/generator/saved" - view list of saved themes 
	- reads localstorage 


## Contexts 

- Base Colour 
	- hex colour of new theme 
- Current CSS theme
	- one theme list 
	- localstorage 
- List of CSS themes
	- array of theme list
	- localstorage 




## Data 

### Colour Object 

```js
{
	hex: "#000000",
	strength: 100,
	rgba: [255, 255, 255, 255]
}
```

### Theme List 

```js
{
	name: "violet eggplant"
	colours: [
		Colour Objects go here 
	]
}
```


# Note for Next Lesson

- [x] Alex needs to find the autoimport package and share that 