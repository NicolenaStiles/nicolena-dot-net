# Roughly taken from these two sources:
# https://stackoverflow.com/questions/65768775/how-do-i-integrate-pyenv-poetry-and-docker
# https://www.dwarmstrong.org/pyenv/
# TODO: Intergrate Poetry support as well?
FROM archlinux 

# metadataadd
MAINTAINER figure8
LABEL Remarks="Containerized development example."

# install prerequisites (general)
RUN pacman -Syyu --noconfirm && \
    pacman -Syy --noconfirm which \
    git

# make it work with my terminal color settings
ENV TERM xterm-256color

# install prerequsites for neovim
RUN pacman -Syy --noconfirm base-devel cmake unzip ninja curl

# clone and install neovim
WORKDIR /home/root
RUN git clone https://github.com/neovim/neovim && \
    cd neovim && \
    git checkout stable && \
    make CMAKE_BUILD_TYPE=RelWithDebInfo && \
    make install
