# hrs.plus
Hawaii Revised Statutes +

## Development
1. Copy the `backend/.env.example` to `backend/.env`
```bash
cp backend/.env.example backend/.env
# Modify backend/.env as needed
```
1. Install [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
1. Install [Vagrant](https://www.vagrantup.com/downloads.html)
1. Open a shell, cd to the root repo dir, and run
```bash
vagrant up
# ...wait awhile as Vagrant+VirtualBox do their magic to provision the VM...
vagrant ssh
```
