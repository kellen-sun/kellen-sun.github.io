import os

directory_path = 'C://Users/sunke/Desktop/Kellen/Programming/WebDevProjects/kellen-sun.github.io/public/content/booknotes'

for filename in os.listdir(directory_path):
    if os.path.isfile(os.path.join(directory_path, filename)):
        new_name = filename[:10]  # Take the first 10 characters
        os.rename(os.path.join(directory_path, filename), os.path.join(directory_path, new_name))
