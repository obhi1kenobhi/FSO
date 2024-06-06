```mermaid
    sequenceDiagram
        participant browser
        participant server
    
        Note over browser,server: A new note is entered and the save button is clicked
    
        browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
        activate server
        server->>browser: URL redirect to https://studies.cs.helsinki.fi/exampleapp/notes
        deactivate server
    
        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
        activate server
        server-->>browser: HTML document
        deactivate server
    
        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
        activate server
        server-->>browser: the css file
        deactivate server
    
        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
        activate server
        server-->>browser: the JavaScript file
        deactivate server
    
        Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server
    
        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
        activate server
        server-->>browser: [{ "content": "Test note for exercise 0.4", "date": "2024-6-6" }, ... ]
        deactivate server
    
        Note right of browser: The browser executes the callback function that renders the notes
```