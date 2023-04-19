import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { UserIcon, EnvelopeIcon, EllipsisHorizontalIcon, SunIcon, PresentationIcon } from '@sanity/icons'
import { colorInput } from '@sanity/color-input'

const singletonActions = new Set(['publish', 'discardChanges', 'restore', 'delete']);
const singletonTypes = new Set(['landingPage', 'aboutPage', 'contactPage', 'projectsPage']);


export default defineConfig({
  name: 'default',
  title: 'portfolio',

  projectId: '3pnqik0t',
  dataset: 'production',

  plugins: [deskTool({
    structure: (S) =>
      S.list()
        .title('Content')
        .items([
          S.listItem()
            .title('Landing Page')
            .id('landingPage')
            .icon(SunIcon)
            .child(
              S.document()
                .schemaType('landingPage')
                .documentId('landingPage')
            ),
          S.listItem()
            .title('About Page')
            .id('aboutPage')
            .icon(UserIcon)
            .child(
              S.document()
                .schemaType('aboutPage')
                .documentId('aboutPage')
            ),
          S.listItem()
          .title('Projects Page')
          .id('projectsPage')
          .icon(PresentationIcon)
          .child(
            S.document()
              .schemaType('projectsPage')
              .documentId('projectsPage')
          ),
          S.listItem()
            .title('Contact Page')
            .id('contactPage')
            .icon(EnvelopeIcon)
            .child(
              S.document()
                .schemaType('contactPage')
                .documentId('contactPage')
            ),
          S.documentTypeListItem('projects').title('Projects').icon(EllipsisHorizontalIcon),
        ])
  }), visionTool(), colorInput()],

  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },
  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
      ? input.filter(({action}) => action && singletonActions.has(action))
      : input,
  }
})
