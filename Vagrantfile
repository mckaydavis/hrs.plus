# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  config.vm.box = "bas/contrib-stretch64"
  config.vm.box_version = "9.0.0"
  config.vm.network "private_network", ip: "192.168.10.10"
  config.vm.synced_folder ".", "/hrs.plus"
  config.vm.define "hrs" do |hrs|
  end
  config.vm.provision "shell", path: "bin/provision.sh", privileged: true

  config.vm.provider "virtualbox" do |v|
    v.memory = 2048
    v.cpus = 2
  end
  
  config.vm.network "forwarded_port", guest: 8080, host: 8080
end
