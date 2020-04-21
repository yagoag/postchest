import React from 'react';
import styled from 'styled-components';
import codeButtons from '../assets/images/code-buttons.svg';

const PostImage = styled.img`
  width: 100%;
  height: auto;
`;

const H1 = styled.h1`
  font-family: 'Bitter';
  font-size: 32px;
  margin: 16px 0;
`;

const AuthorInfo = styled.div`
  color: #d6d6d6;
  font-size: 14px;
  margin-bottom: 16px;
`;

const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 32px;
`;

const Tag = styled.div`
  background-color: ${({ color }) => color};
  padding: 4px 8px;
  margin-right: 8px;
  font-weight: 600;
  font-size: 14px;
  /* TODO: Text color should be change based on bg color */
  color: #ffffff;
`;

const Paragraph = styled.p`
  color: #ffffff;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 16px;
`;

const CodeContainer = styled.div`
  pre {
    &:before {
      content: '';
      background-image: url(${codeButtons});
      background-size: auto 14px;
      background-repeat: no-repeat;
      display: block;
      margin: 6px 0 0 12px;
      width: 60px;
      height: 14px;
    }

    background-color: #3c3c3c;
    border-top: 1px solid #828282;
    border-radius: 6px;
    margin: 32px 8px;
    box-shadow: 0 0 16px #00000044;

    code {
      display: block;
      margin-top: 6px;
      padding: 16px 24px;
      background-color: #2d2d2d;
      border-radius: 0 0 6px 6px;
    }
  }
`;

const Post = () => (
  <>
    <PostImage
      src="https://images.pexels.com/photos/3675083/pexels-photo-3675083.jpeg"
      alt="night sky with crescent moon and stars, ween through a forest of pine trees"
    />
    <H1>JavaScript essentials: why you should not use for loops</H1>
    <AuthorInfo>April 20, 2020 | By Yago Arroyo | Edit</AuthorInfo>
    <TagContainer>
      <Tag color="red">JavaScript</Tag> <Tag color="purple">Essentials</Tag>
    </TagContainer>
    <Paragraph>
      I'm baby la croix marfa cronut, quinoa tumeric tofu chicharrones
      skateboard pork belly meggings pour-over green juice direct trade. Offal
      green juice street art viral coloring book. 90's actually twee selvage,
      cray salvia jianbing lo-fi la croix shoreditch YOLO tbh narwhal. Trust
      fund portland tote bag meh messenger bag. Banh mi before they sold out
      cray pork belly direct trade man braid DIY literally XOXO pitchfork
      live-edge pop-up. Tousled shabby chic yr, before they sold out keffiyeh
      gluten-free sriracha church-key. Prism viral locavore twee post-ironic
      mumblecore offal vegan sustainable +1 drinking vinegar lyft.
    </Paragraph>
    <Paragraph>
      Edison bulb four dollar toast helvetica blue bottle meggings asymmetrical
      gochujang ennui succulents freegan plaid enamel pin semiotics. Waistcoat
      tattooed cronut hexagon man braid vegan aesthetic, hell of franzen
      try-hard brunch messenger bag. YOLO meditation listicle, master cleanse
      umami celiac occupy organic iPhone activated charcoal roof party readymade
      echo park live-edge. Literally pug paleo pop-up, gochujang green juice
      hell of franzen offal.
    </Paragraph>
    <CodeContainer>
      <pre>
        <code>
          {`const File = (url, object) => {
  File.list = Array.isArray(File.list) ? File.list : [];
  File.progress = File.progress || 0;
  this.progress = 0;
  this.object = object;
  this.url = url;
};

File.indexOf = term => {
  for (let index in File.list) {
    let file = File.list[index];
    if (file.equals(term) || file.url === term || file.object === term) {
      return index;
    }
  }
  return -1;
};`}
        </code>
      </pre>
    </CodeContainer>
    <Paragraph>
      Vaporware keytar banjo blog, fixie artisan +1 ugh put a bird on it
      flexitarian deep v fingerstache jianbing tilde. Put a bird on it truffaut
      blog selvage, 90's meh typewriter offal man bun. Leggings gastropub
      heirloom distillery raclette seitan. Tilde selvage kitsch scenester, umami
      brunch sustainable meggings locavore whatever neutra semiotics cred.
      Crucifix taiyaki health goth fanny pack, four loko kombucha DIY paleo
      keytar chia jianbing tilde PBR&B. Shabby chic hell of pabst, taiyaki
      live-edge twee lyft fam copper mug intelligentsia authentic tousled
      microdosing drinking vinegar.
    </Paragraph>
    <Paragraph>
      Hashtag pinterest four dollar toast la croix activated charcoal
      asymmetrical ennui. Subway tile hella wayfarers semiotics. Fingerstache
      edison bulb schlitz, slow-carb quinoa blog selvage art party you probably
      haven't heard of them bushwick snackwave. Subway tile kickstarter photo
      booth, mustache drinking vinegar taxidermy deep v hashtag. Vape
      sustainable before they sold out selfies hella. Asymmetrical keffiyeh
      kombucha, 3 wolf moon everyday carry chillwave adaptogen austin vice
      readymade.
    </Paragraph>
    <Paragraph>
      Kale chips vice flannel, la croix before they sold out bushwick kitsch
      vape four dollar toast copper mug. Glossier ennui put a bird on it,
      live-edge microdosing hella tumeric marfa yuccie forage locavore. Fashion
      axe pabst dreamcatcher chambray pinterest narwhal umami lo-fi food truck
      vegan. Stumptown af bespoke 90's tacos polaroid biodiesel mixtape.
    </Paragraph>
  </>
);

export default Post;
