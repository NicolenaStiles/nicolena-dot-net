# Roughly taken from these two sources:
# https://stackoverflow.com/questions/65768775/how-do-i-integrate-pyenv-poetry-and-docker
# https://www.dwarmstrong.org/pyenv/
# TODO: Intergrate Poetry support as well?
FROM archlinux 

# metadataadd
MAINTAINER figure8
LABEL Remarks="Containerized js development example."

# install prerequisites (general)
RUN pacman -Syyu --noconfirm && \
    pacman -Syy --noconfirm vim \
    which \
    git

# install prerequisites (juuuust for pyenv)
RUN pacman -S --needed --noconfirm base-devel openssl zlib xz tk nodejs