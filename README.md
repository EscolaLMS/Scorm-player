# SCORM Player

A simple SCORM (Sharable Content Object Reference Model) player for loading and running SCORM packages.

## Features

- Loads SCORM 1.2 packages.
- Tracks progress and completion status.
- Provides a minimal UI for interaction.

## Installation

1. Clone or download this repository.
2. Install required dependencies if applicable.
3. Ensure your web server is configured correctly to serve this project.

## Copying the Public Folder

1. Copy the entire "public" folder.
2. Paste it into your existing project's "public" directory.
3. Adjust paths and references as needed.

## Getting Started

1. Run the application on a web server.
2. Place SCORM packages in the designated folder.
3. Access the player in your browser to launch SCORM courses.

## Contributing

- Fork the repository.
- Create a new branch for your feature or bugfix.
- Submit a pull request for review.

## Usage Example

```
// src/App.tsx
import React from 'react';
import { ScormPreview } from 'scorm-player';

function App() {
  return (
    <div>
      <h1>My SCORM App</h1>
      <ScormPreview
        uuid="some-scorm-uuid"
        apiUrl="https://api.yourserver.com"
        serviceWorkerUrl="/service-worker-scorm.js"
        comunitate
        onScormPost={handleScormPost}
        onScormGet={handleScormGet}
      />
    </div>
  );
}

export default App;
```
