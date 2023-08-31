-- Fat cursor always
vim.opt.guicursor = ""

-- Line numbers on and relative
vim.opt.nu = true
vim.opt.relativenumber = true

-- Tab/space settings
vim.opt.tabstop = 4
vim.opt.softtabstop = 4
vim.opt.shiftwidth = 4
vim.opt.expandtab = true

-- ... and try to be smart about it
vim.opt.smartindent = true

-- diable line wrap (maybe a bad thing?)
vim.opt.wrap = false

-- search highlight options
vim.opt.hlsearch = false
vim.opt.incsearch = true

-- terminal colors
vim.opt.termguicolors = true

-- pad some screen space
vim.opt.scrolloff = 8

-- set fast update time
vim.opt.updatetime = 50

-- color column to show edge
vim.opt.colorcolumn = "80"
