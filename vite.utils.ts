import path from 'path'

export const RootPath = path.resolve(__dirname)

export const ProjectPaths = {
  Public: path.resolve(RootPath, 'public'),
  Source: path.resolve(RootPath, 'src'),
  Pages: path.resolve(RootPath, 'src/pages'),
  Output: path.resolve(RootPath, 'build'),
}
