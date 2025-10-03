#!/bin/bash

# Define the target file
TARGET_FILE="src/App.jsx"

# Remove import line
sed -i '/import HomePageUserSpecific from ".\/pages\/HomePageUserSpecific";/d' "$TARGET_FILE"

# Remove self-closing JSX tag: <HomePageUserSpecific />
sed -i '/<HomePageUserSpecific\s*\/>/d' "$TARGET_FILE"

# Remove opening and closing JSX block: <HomePageUserSpecific>...</HomePageUserSpecific>
sed -i '/<HomePageUserSpecific>/,/<\/HomePageUserSpecific>/d' "$TARGET_FILE"

echo "✅ Cleaned up HomePageUserSpecific references from $TARGET_FILE"
chmod +x cleanup.sh
./cleanup.sh

