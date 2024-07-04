
#!/bin/bash

# Directory containing the files
dir="posts"

# Loop through each file in the directory
for file in "$dir"/*; do
  # Check if the file is a regular file
  if [ -f "$file" ]; then
    # Use sed to insert 'isdraft: true' after the first line
    sed -i '1 a isdraft: true' "$file"
  fi
done
