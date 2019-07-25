UrbanExploration

Description: My project is about urban exploration; from the places I've visited as an urban explorer,
the places I hope to visit, to the background information and warnings/risks of the hobby.

GitHub download instructions:
    1. Select Clone or Download dropdown
    2. Select the "Download Zip" option
    3. Find downloaded zip in your downloads folder (can also be selected from browser)
    4. Extract all files from zip folder to location of your choice
    5. Find extracted files in location you chose in previous step
    6. Open Index.html in your browser of choice to view website


Custom CSS Classes: Some of the classes I created are:
    1. .rotateimg 
            this class rotates an image
    2. .info::after, .link::after, .sticky::after
            keeps sticky footer below the content
    3. .PText
            makes text over one of the carousel images black & boldened


Custom JavaScript Functions: The JavaScript functions I created are:
    1. blink.fn = setInterval(function () {blink.obj.fadeToggle(blink.speed);}
         blink.speed + 1);
            setInterval function is used to make the heading of the warning page flash red text (the blink variable in "blink.fn" sets the speed of the blinking text as well as the timeout of the function).
    2. $('.gear:odd').css('background-color','white').css('color',    
         'maroon');
            this function changes the background color of the ul list
            to white & changes the odd numbered list texts to maroon. (This is also used for the .hazards class)
    3. $('.gear:even').css('background-color', 'white').css('color',
         'navy');
            this function changes the background color of the ul list
            like the above to white & changes the even numbered list texts to navy. (This is also used for the .hazards class)
        