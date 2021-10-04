<p align="center">
  <a href="https://snek.at/" target="_blank" rel="noopener noreferrer">
    <img src="https://avatars2.githubusercontent.com/u/55870326?s=400&u=c6c7f06305ddc94747d474850fde7b2044f53838&v=4" alt="SNEK Logo" height="150">
  </a>
</p>

<h3 align="center">Snek Jaen-Template</h3>

<p align="center">
  This is the official Jaen[ˈdʒæn] template provided by snek-at.
  Featuring Jaen the free, hot and secure CMS framework for ReactJS.
  <br>
  <br>
  <cite>"A bowl is most useful when it is empty."</cite> - Lao Tzu
  <br>
  <br>
  <a href="https://github.com/snek-at/jaen/issues/new?template=bug_report.md">Report bug</a>
  ·
  <a href="https://github.com/snek-at/jaen/issues/new?template=feature_request.md">Request feature</a>
  ·
  <a href="https://www.github.com/snek-at/jaen/wiki">Documentation</a>
  <br>
  <br>
  <a href="https://www.codacy.com/gh/snek-at/jaen/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=snek-at/jaen&amp;utm_campaign=Badge_Grade">
    <img src="https://app.codacy.com/project/badge/Grade/bb3d984d38704860ba7ad800d319b8c4" />
  </a>
</p>

## [](#table-of-contents)What’s In This Document
- [💪 Motivation](#-motivation)
    - [Jaen Features](#jaen-features)
    - [Roadmap](#roadmap)
    - [Msg inspiring PPL](#msg-inspiring-ppl)
    - [Disclaimer](#disclaimer)
- [🚀 Get Up and Running in 5 Minutes](#-get-up-and-running-in-5-minutes)
    - [Generate from template Generate Jaen on GitHub](#generate-from-template-generate-jaen-on-github)
    - [First Deployment](#first-deployment)
    - [Deployment Options](#deployment-options)
        - [Codespace Setup](#codespace-setup)
        - [Local Setup](#local-setup)
            - [Troubleshooting](#troubleshooting)
    - [Editing](#editing)
- [💻 How to Code](#-how-to-code)
    - [Overview](#overview)
        - [App Settings](#app-settings)
        - [Page Settings](#page-settings)
        - [Fields](#fields)
    - [App Settings](#app-settings)
    - [Page Settings](#page-settings)
    - [Fields](#fields)
        - [SimpleTextField](#simpletextfield)
        - [SimpleRichTextField](#simplerichtextfield)
        - [SimpleImageField](#simpleimagefield)
        - [SimplePdfField](#simplepdffield)
        - [StreamField](#streamfield)
        - [IndexField](#indexfield)
    - [Blocks](#blocks)
- [🐞 How to Report a Bug or Request a Feature](#-how-to-report-a-bug-or-request-a-feature)
- [🤝 How to Contribute](#-how-to-contribute)
- [💚 Thanks](#-thanks)
- [💼 Creators](#-creators)
- [🤔 FAQs](#-faqs)
- [📝 Copyright and License](#-copyright-and-license)

## [](#-motivation)💪 Motivation

A CMS **should not** be the defining feature of a webapp. Neither should Ecommerce or anything other than your code. \
ERP integration **should not** force developer to cut corners.

- Jaen **does not** interfere with **your** user experience.
- Jean **does not** challange **your** application design.
- Jaen gives the power back to **you**.

One thing and one thing only with clean and well documented interfaces.
Customizable, extensible and open-source.

### Jaen Features
* A fast, attractive interface for authors
* Complete control over front-end design and structure
* Fast out of the box, cache-friendly when you need it
* StreamField encourages flexible content without compromising structure
* Excellent support for images and embedded content
* Powered by blockchain and can be run for free
* Simple, intuitive "What you see is what you get" editing mode

### Roadmap
| Feature                       | Shipped | Almost There | We're Writing the Code | Investigating |
|-------------------------------|:---:|:---:|:---:|:---:|
| `IndexField`                  | ✅️ |  |  |  |
| `RichTextField`               | ✅️ |  |  |  |
| `Email Support`               | ✅️ |  |  |  |
| `Fixed parent for IndexField` | ✅️ |  |  |  |
| `TextField`                   | ✅️ |  |  |  |
| `Dynamic Routes`              | ✅️ |  |  |  |
| `PdfField`                    | ✅️ |  |  |  |
| `ImageField`                  | ✅️ |  |  |  |
| `StreamField`                 | ✅️ |  |  |  |
| `LinkField`                   |  | ✅️ |  |  |
| `Gatsby`                      |  |  | ✅️ |  |
| `Converter (HELMUT)`          |  |  |  | ✅️ |
| `Smart Converter (SMARTMUT)`  |  |  |  | ✅️ |
| `E-Commerce`                  |  |  |  | ✅️ |
| `User Management`             |  |  |  | ✅️ |
| `Email Templates`             |  |  |  | ✅️ |
| `Development Tools`           |  |  |  | ✅️ |
| `Snek Editor`                 |  |  |  | ✅️ |
| `YT Tutorials`                |  |  |  | ✅️ |

#### Msg inspiring PPL
Chasing ones own tail is not inspiring.

#### Disclaimer
Not for crybabies. Do not touch if you are afraid of being scratched a little.

## [](#-get-up-and-running-in-5-minutes)🚀 Get Up and Running in 5 Minutes

### Generate from template [Generate Jaen on GitHub](https://github.com/snek-at/jaen-template/generate)
| Generate from template | Important public and no branches |
|---|---|
| ![image](https://user-images.githubusercontent.com/83394650/124399008-16b7d780-dd19-11eb-84bb-769462d5440e.png) | ![image](https://user-images.githubusercontent.com/83394650/124401575-6c48b000-dd2a-11eb-8316-7f583e5e98d7.png) |

### First Deployment
The `GITHUB_TOKEN` has limitations for the first deployment so we have to select the GitHub Pages branch on the repository settings tab. After that follow the instrucions shown in the pictures below to deploy successfully.

| First deployment failed | Go to the [settings tab](https://github.com/snek-at/jaen-template/settings/pages) |
|---|---|
| ![image](https://user-images.githubusercontent.com/83394650/124398796-ecb1e580-dd17-11eb-9f06-64d73eb2d4d9.png) | ![image](https://user-images.githubusercontent.com/83394650/124398815-0ce1a480-dd18-11eb-9aef-9d8a3797008b.png) |

| Select branch | Deploying again and succeed |
|---|---|
| ![image](https://user-images.githubusercontent.com/83394650/124398825-1408b280-dd18-11eb-985f-f28de94b8888.png) | ![image](https://user-images.githubusercontent.com/83394650/124398968-d3f5ff80-dd18-11eb-8f17-ee2d92900014.png) |

### Deployment Options
We recomend to use [vscode](https://github.com/microsoft/vscode) as IDE in either an codespace or local setup.

#### Codespace Setup
The easiest method is to use a GitHub [Codespace](https://github.com/features/codespaces) (in beta). Just create a GitHub Codespace from the Code menu. Wait for the Codespace to complete provisioning. When the Codespace has completed provisioning open a terminal window (Ctrl-`, Control-backquote) and:

- Add [GitHub npm registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry) `npm login --registry=https://npm.pkg.github.com`
- Create .env and set PUBLIC_URL
- Start a local copy of the docs site with `npm start`
- Or build a local copy of the library with `npm run build`

#### Local Setup
If you decide to set up locally, make sure you have the following prerequisites:

- Add [GitHub npm registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry) `npm login --registry=https://npm.pkg.github.com`
- Use `npm install` to install all dependencies
- Start a local copy of the docs site with `npm start`
- Or build a local copy of the library with `npm run build`

The demo site will now be accessible at <http://localhost:3000/>.

#### Troubleshooting

If you are having trouble to get the template up and running there are a few things you can try:

- node-sass requires you to use node15. If you have node16 you can use nvm to get the repository running without having to downgrade

If you encounter any other issues getting this template to work we ask you to [report it](https://github.com/snek-at/jaen/issues) so that we can improve the documentation.

#### Editing

To edit the page you have to log into the CMS.<br />
The standard user for this is **snekman** and the password for the account is **ciscocisco**.

## [](#-how-to-code)💻 How to Code

### Overview

#### App Settings
| Field                         | Properties | Description | Wiki | Tutorial |
|-------------------------------|------------|-------------|:----:|:--------:|
| `CMSProvider`             	| settings <br/> pages | The CMSProvider registers a Jaen application and provides a way to share values (e.g fields) between Jaen and the template pages. |  |  |

#### Page Settings
| Field                         | Type       | Description | Wiki | Tutorial |
|-------------------------------|:----------:|-------------|:----:|:--------:|
| `PageType`             	| string     | The PageType defines the name of your page in the context of the CMS. |  |  |
| `ChildPages`         		| [Pages]    | ChildPages is an array of pages in which you define what subpages can be added to a particular PageType. |  |  |

#### Fields
| Field                         | Properties | Description | Wiki | Tutorial |
|-------------------------------|------------|-------------|:----:|:--------:|
| `SimpleTextField`             | name <br/> | A SimpleTextField can be used to add short editable texts to your page.| [✅️](https://github.com/snek-at/jaen/wiki/SimpleTextField) |  |
| `SimpleRichTextField`         | name <br/> | SimpleRichtextField is used to provide an editable RichTextField to your page. | [✅️](https://github.com/snek-at/jaen/wiki/SimpleRichTextField) |  |
| `SimpleImageField`            | name <br/> | A SimpleImageField provides you with the option to embed a image of your choice. | [✅️](https://github.com/snek-at/jaen/wiki/SimpleImageField) |  |
| `ImageField`                  | fieldOptions <br/> imageClassName <br/> imageStyle | The ImageField can is used to provide editable images that can also be passed an imageStyle parameter as well as an imageClassName parameter in order to style your images. | [✅️](https://github.com/snek-at/jaen/wiki/ImageField) |  |
| `SimplePdfField`            	| name <br/> pdfStyle | If you want to embed a PdfFile on your page you can use our SimplePdfField. | [✅️](https://github.com/snek-at/jaen/wiki/SimplePdfField) |  |
| `StreamField`                 | name <br/> reverseOrder <br/> blocks| With a StreamField you can build your own React-Components with editable content and repeat them as often as you like. | [✅️](https://github.com/snek-at/jaen/wiki/StreamField) |  |
| `IndexField`                  | fixedSlug <br/> outerElement <br/> renderItem | The IndexField provides you with the oppertunity to easily build links, buttons and more pointing to your subpages. It is also useful for building cards that rely on content from childpages.  <br /> With the fixedSlug property you can decide which page the childpages are pulled from. | [✅️](https://github.com/snek-at/jaen/wiki/IndexField) |  |

### App Settings
```javascript
import {CMSProvider} from '@snek-at/jaen'

import {HomePage} from '...'
import ImprintPage from '...'

const App: React.FC = () => {
  return (
    <div style={{margin: 150}}>
      <CMSProvider
        settings={{gitRemote: process.env.REACT_APP_JAEN_GIT_REMOTE}}
        pages={[HomePage, ImprintPage]}></CMSProvider>
    </div>
  )
}
)
```

### Page Settings
```javascript
import ImprintPage from '...'

const HomePage: ConnectedPageType = () => {...}

HomePage.PageType = 'HomePage'
HomePage.ChildPages = [ImprintPage]

export default HomePage
```

### Fields
Fields are data blocks that you can use to build React apps which the enduser is able to maintain. 
Fieldnames have to be unique when they are on the same page.
It is advisable to give all the fields descriptive names.
#### SimpleTextField

The SimpleTextField is as the name implies quite simple. You just have to give the field a name.<div align=right>[Wiki 📖](https://github.com/snek-at/jaen/wiki/SimpleTextField)</div>

```javascript
import {SimpleTextField} from '@snek-at/jaen'

const HomePage: ConnectedPageType = () => {
  return (
    <SimpleTextField name="stffield" />
  )
}

[...]

export default HomePage
```

#### SimpleRichTextField 

SimpleRichTextField is also a quite simple field that only requires a name. <div align=right>[Wiki 📖](https://github.com/snek-at/jaen/wiki/SimpleRichTextField)</div>

```javascript
import {SimpleRichTextField} from '@snek-at/jaen'

const HomePage: ConnectedPageType = () => {
  return (
    <SimpleRichTextField name="srtffield" />
  )
}

[...]

export default HomePage
```

#### SimpleImageField

If you want to add an image to your page you can use the SimpleImageField. <br />
It works by embedding an image that is hosted on the ipfs by the CMS.<div align=right>[Wiki 📖](https://github.com/snek-at/jaen/wiki/SimpleImageField)</div>

```javascript
import {SimpleImageField} from '@snek-at/jaen'

const HomePage: ConnectedPageType = () => {
  return (
    <SimpleImageField
      name="siffield"
    />
  )
}

[...]

export default HomePage
```

#### ImageField

The ImageField is a more powerful version of the SimpleImageField. In addition to giving the field a name you also have the oppertunity to pass the field an imageClassName as well as an imageStyle property to fulfill your styling requirements. <div align=right>[Wiki 📖](https://github.com/snek-at/jaen/wiki/ImageField)</div>

```javascript
import {ImageField} from '@snek-at/jaen'

const HomePage: ConnectedPageType = () => {
  return (
    <ImageField
      fieldOptions={{fieldName: "iffield"}}
      imageClassName="iffield"
      imageStyle={{width: '500px', height: '500px', objectFit: 'cover'}}
    />
  )
}

[...]

export default HomePage
```

#### SimplePdfField 

SimplePdfFields as the name implies enables you to embed a PDF hosted on the ipfs.<div align=right>[Wiki 📖](https://github.com/snek-at/jaen/wiki/SimplePdfField)</div>

```javascript
import {SimplePdfField} from '@snek-at/jaen'

const HomePage: ConnectedPageType = () => {
  return (
     <SimplePdfField name="spffield" pdfStyle={{height: 1000, width: 1000}} />
  )
}

[...]

export default HomePage
```


#### StreamField

Jaen StreamFields enable you to integrate editable blocks and to use as many of them as you like. In order to use this field you are required to build a block. You can find an example of a block below.<div align=right>[Wiki 📖](https://github.com/snek-at/jaen/wiki/StreamField)</div>

```javascript
import {StreamField} from '@snek-at/jaen'
import {CardBlock} from '...'

const HomePage: ConnectedPageType = () => {
  return (
    <div style={{width: '50%', display: 'table'}}>
      <StreamField
        reverseOrder={false}
        name={'timeline'}
        blocks={[CardBlock]}
      />
    </div>
  )
}

[...]

export default HomePage
```

#### IndexField

If you want to link to childpages of a slug the IndexField is your friend. The fixedSlug property is not required. When none is provided the children of the current page are used if you like it is possible to specify the parentpage, the outerElement is the wrapper for all your items and the renderItem property allows you to build cards, teasers, buttons and more to your subpages.<div align=right>[Wiki 📖](https://github.com/snek-at/jaen/wiki/IndexField)</div>

```javascript
import {IndexField} from '@snek-at/jaen'

const HomePage: ConnectedPageType = () => {
  return (
    <IndexField
      fixedSlug={'home'}
      outerElement={() => <div />}
      renderItem={(item, key, navigate) => (
        <p key={key}>
          Slug: {item.slug} Title: {item.title}{' '}
          <button onClick={() => navigate()}>Goto</button>
        </p>
       )}
    />
  )
}

[...]

export default HomePage
```


### Blocks
The Block is the keystone of the StreamField. With the help of blocks you can build complex React-Components with editable content.<div align=right>[Wiki 📖](https://github.com/snek-at/jaen/wiki/Blocks)</div>

```javascript
import {
  BC,
  prepareBlocks,
  ImageField,
  EditableField,
  RichTextField
} from '@snek-at/jaen'

type BlockType = {
  title: string
  extra: string
  text: string
  }

const Block: BC<BlockType> = ({
  fieldOptions,
  streamFieldWidth
}) => {
  const blocks = prepareBlocks<BlockType>(Block, fieldOptions)

  return (
    <>
      <div className="card">
        <h1>{title}</h1>
        {blocks['text']}
        {blocks['image']}
        {blocks['extra']}
      </div>
    </>
  )
}

Block.BlockType = 'Block'
Block.BlockFields = {
  image: ImageField,
  title: EditableField,
  extra: EditableField,
  text: RichTextField
}

export default Block
```


## [](#-how-to-report-a-bug-or-request-a-feature)🐞 How to Report a Bug or Request a Feature

Have a bug or a feature request? Please first search for existing and closed issues. If your problem or idea is not
addressed yet, [please open a new issue](https://github.com/snek-at/jaen/issues/new/choose).

## [](#-how-to-contribute)🤝 How to Contribute
![GitHub last commit](https://img.shields.io/github/last-commit/snek-at/jaen)
![GitHub issues](https://img.shields.io/github/issues-raw/snek-at/jaen)
![GitHub closed issues](https://img.shields.io/github/issues-closed-raw/snek-at/jaen?color=green)

Please read through our
[contributing guidelines](https://github.com/snek-at/jaen/blob/master/CONTRIBUTING.md). Included are
directions for opening issues, coding standards, and notes on development.

All code should conform to the [Code Guide](https://github.com/snek-at/tonic/blob/master/STYLE_GUIDE.md), maintained by
[snek-at](https://github.com/snek-at).

## [](#-thanks)💚 Thanks

We do not have any external contributors yet, but if you want your name to be here, feel free
to [contribute to our project](#contributing).

## [](#-creators)💼 Creators

<table border="0">
  <tr>
	  <td>
      <a href="https://github.com/schettn">
        <img src="https://avatars.githubusercontent.com/schettn?s=100" alt="Avatar schettn">
      </a>
    </td>
    <td>
      <a href="https://github.com/kleberbaum">
        <img src="https://avatars.githubusercontent.com/kleberbaum?s=100" alt="Avatar kleberbaum">
      </a>
    </td>
    <td>
      <a href="https://github.com/kleberbaum">
        <img src="https://avatars.githubusercontent.com/petute?s=100" alt="Avatar petute">
      </a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/schettn">Nico Schett</a>
    </td>
    <td>
      <a href="https://github.com/kleberbaum">Florian Kleber</a>
    </td>
    <td>
      <a href="https://github.com/petute">Daniel Petutschnigg</a>
    </td>
  </tr>
</table>

## [](#-faqs)🤔 FAQs
**Q:** What do the roadmap categories mean?
* Shipped - Hopefully you are enjoying it! Give us feedback on how it is working!
* Almost There - We are applying the finishing touches. Things in this bucket you can expect to be shipped within 2-4 weeks.
* We're Writing the Code - Actively in development, we are trying to get this out to you in a good state as soon as we can.
* Investigating - We're thinking about it. This might mean we're still designing, or thinking through how this might work. This is a great phase to send how you want to see something implemented! We'd love to see your usecase or design ideas here.

**Q:** Why are there no dates on your roadmap?

**A:** Because we know things change and we want the room to do the right thing by fixing security issues as they come up or helping people out where they need. This means we might have to change our priorities and don’t want to let people down.

**Q:** How can I provide feedback or ask for more information?

**A:** Please open an issue in this repo! If the issue is a bug or security issue, please follow the separate instructions above.

**Q:** How can I request a feature be added to the roadmap?

**A:** Please open an issue! You can read about how to contribute [here](https://github.com/snek-at/jaen/blob/master/CONTRIBUTING.MD). Community submitted issues will be tagged "Proposed" and will be reviewed by the team.

## [](#-copyright-and-license)📝 Copyright and License

![GitHub repository license](https://img.shields.io/badge/license-EUPL--1.2-blue)

Use of this source code is governed by an EUPL-1.2 license that can be found
in the LICENSE file at https://snek.at/license

<!--
  SPDX-FileCopyrightText: Copyright © 2021 snek.at
  SPDX-License-Identifier: EUPL-1.2
  Use of this source code is governed by an EUPL-1.2 license that can be found
  in the LICENSE file at https://snek.at/license
-->
