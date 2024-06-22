import os
for i in range(2,46):
    folder = f'./exercises{i}'
    if not os.path.exists(folder):
        os.makedirs(folder)
        print("folder created")
    else:
        print("already in the directory")