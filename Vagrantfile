# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  # Use the modern, supported Ubuntu 22.04 LTS
  config.vm.box = "ubuntu/jammy64"

  # Set disk size to 30GB. Requires the 'vagrant-disksize' plugin.
  config.disksize.size = '30GB'

  # Provider-specific configuration for VirtualBox
  config.vm.provider "virtualbox" do |vb|
    # Customize the amount of memory on the VM to 4GB
    vb.memory = "4096"

    # Customize the number of CPUs on the VM
    vb.cpus = "4"
  end

  # Enable provisioning with a shell script to install required tools
  config.vm.provision "shell", inline: <<-SHELL
    # Update package lists
    apt-get update -y
    
    # --- Install Docker ---
    echo ">>> Installing Docker..."
    curl -fsSL https://get.docker.com -o get-docker.sh
    sh get-docker.sh
    # Add vagrant user to the docker group
    usermod -aG docker vagrant
    echo ">>> Docker installed."

    # --- Install k3s (Lightweight Kubernetes) to use the Docker runtime ---
    echo ">>> Installing k3s..."
    # Add the '--write-kubeconfig-mode 644' flag to make the config file readable
    curl -sfL https://get.k3s.io | sh -s - --docker --write-kubeconfig-mode 644
    echo ">>> k3s installed."
    
    # --- Install Helm (Kubernetes Package Manager) ---
    echo ">>> Installing Helm..."
    curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3
    chmod 700 get_helm.sh
    ./get_helm.sh
    echo ">>> Helm installed."

    # --- Set KUBECONFIG for the vagrant user's shell ---
    echo ">>> Setting KUBECONFIG for vagrant user..."
    echo 'export KUBECONFIG=/etc/rancher/k3s/k3s.yaml' >> /home/vagrant/.bashrc

    echo "--- Provisioning complete! ---"
  SHELL
end