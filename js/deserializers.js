var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i598 = root || request.c( 'UnityEngine.JointSpring' )
  var i599 = data
  i598.spring = i599[0]
  i598.damper = i599[1]
  i598.targetPosition = i599[2]
  return i598
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.JointMotor' )
  var i601 = data
  i600.m_TargetVelocity = i601[0]
  i600.m_Force = i601[1]
  i600.m_FreeSpin = i601[2]
  return i600
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.JointLimits' )
  var i603 = data
  i602.m_Min = i603[0]
  i602.m_Max = i603[1]
  i602.m_Bounciness = i603[2]
  i602.m_BounceMinVelocity = i603[3]
  i602.m_ContactDistance = i603[4]
  i602.minBounce = i603[5]
  i602.maxBounce = i603[6]
  return i602
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.JointDrive' )
  var i605 = data
  i604.m_PositionSpring = i605[0]
  i604.m_PositionDamper = i605[1]
  i604.m_MaximumForce = i605[2]
  return i604
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i607 = data
  i606.m_Spring = i607[0]
  i606.m_Damper = i607[1]
  return i606
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i609 = data
  i608.m_Limit = i609[0]
  i608.m_Bounciness = i609[1]
  i608.m_ContactDistance = i609[2]
  return i608
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i611 = data
  i610.m_ExtremumSlip = i611[0]
  i610.m_ExtremumValue = i611[1]
  i610.m_AsymptoteSlip = i611[2]
  i610.m_AsymptoteValue = i611[3]
  i610.m_Stiffness = i611[4]
  return i610
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i613 = data
  i612.m_LowerAngle = i613[0]
  i612.m_UpperAngle = i613[1]
  return i612
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i614 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i615 = data
  i614.m_MotorSpeed = i615[0]
  i614.m_MaximumMotorTorque = i615[1]
  return i614
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i617 = data
  i616.m_DampingRatio = i617[0]
  i616.m_Frequency = i617[1]
  i616.m_Angle = i617[2]
  return i616
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i619 = data
  i618.m_LowerTranslation = i619[0]
  i618.m_UpperTranslation = i619[1]
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i620 = root || new pc.UnityMaterial()
  var i621 = data
  i620.name = i621[0]
  request.r(i621[1], i621[2], 0, i620, 'shader')
  i620.renderQueue = i621[3]
  i620.enableInstancing = !!i621[4]
  var i623 = i621[5]
  var i622 = []
  for(var i = 0; i < i623.length; i += 1) {
    i622.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i623[i + 0]) );
  }
  i620.floatParameters = i622
  var i625 = i621[6]
  var i624 = []
  for(var i = 0; i < i625.length; i += 1) {
    i624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i625[i + 0]) );
  }
  i620.colorParameters = i624
  var i627 = i621[7]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
    i626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i627[i + 0]) );
  }
  i620.vectorParameters = i626
  var i629 = i621[8]
  var i628 = []
  for(var i = 0; i < i629.length; i += 1) {
    i628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i629[i + 0]) );
  }
  i620.textureParameters = i628
  var i631 = i621[9]
  var i630 = []
  for(var i = 0; i < i631.length; i += 1) {
    i630.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i631[i + 0]) );
  }
  i620.materialFlags = i630
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i635 = data
  i634.name = i635[0]
  i634.value = i635[1]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i639 = data
  i638.name = i639[0]
  i638.value = new pc.Color(i639[1], i639[2], i639[3], i639[4])
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i643 = data
  i642.name = i643[0]
  i642.value = new pc.Vec4( i643[1], i643[2], i643[3], i643[4] )
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i647 = data
  i646.name = i647[0]
  request.r(i647[1], i647[2], 0, i646, 'value')
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i651 = data
  i650.name = i651[0]
  i650.enabled = !!i651[1]
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i653 = data
  i652.name = i653[0]
  i652.width = i653[1]
  i652.height = i653[2]
  i652.mipmapCount = i653[3]
  i652.anisoLevel = i653[4]
  i652.filterMode = i653[5]
  i652.hdr = !!i653[6]
  i652.format = i653[7]
  i652.wrapMode = i653[8]
  i652.alphaIsTransparency = !!i653[9]
  i652.alphaSource = i653[10]
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i655 = data
  i654.pivot = new pc.Vec2( i655[0], i655[1] )
  i654.anchorMin = new pc.Vec2( i655[2], i655[3] )
  i654.anchorMax = new pc.Vec2( i655[4], i655[5] )
  i654.sizeDelta = new pc.Vec2( i655[6], i655[7] )
  i654.anchoredPosition3D = new pc.Vec3( i655[8], i655[9], i655[10] )
  i654.rotation = new pc.Quat(i655[11], i655[12], i655[13], i655[14])
  i654.scale = new pc.Vec3( i655[15], i655[16], i655[17] )
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i657 = data
  i656.enabled = !!i657[0]
  i656.planeDistance = i657[1]
  i656.referencePixelsPerUnit = i657[2]
  i656.isFallbackOverlay = !!i657[3]
  i656.renderMode = i657[4]
  i656.renderOrder = i657[5]
  i656.sortingLayerName = i657[6]
  i656.sortingOrder = i657[7]
  i656.scaleFactor = i657[8]
  request.r(i657[9], i657[10], 0, i656, 'worldCamera')
  i656.overrideSorting = !!i657[11]
  i656.pixelPerfect = !!i657[12]
  i656.targetDisplay = i657[13]
  i656.overridePixelPerfect = !!i657[14]
  return i656
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i659 = data
  i658.m_UiScaleMode = i659[0]
  i658.m_ReferencePixelsPerUnit = i659[1]
  i658.m_ScaleFactor = i659[2]
  i658.m_ReferenceResolution = new pc.Vec2( i659[3], i659[4] )
  i658.m_ScreenMatchMode = i659[5]
  i658.m_MatchWidthOrHeight = i659[6]
  i658.m_PhysicalUnit = i659[7]
  i658.m_FallbackScreenDPI = i659[8]
  i658.m_DefaultSpriteDPI = i659[9]
  i658.m_DynamicPixelsPerUnit = i659[10]
  return i658
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i661 = data
  i660.m_IgnoreReversedGraphics = !!i661[0]
  i660.m_BlockingObjects = i661[1]
  i660.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i661[2] )
  return i660
}

Deserializers["ScenePreloader"] = function (request, data, root) {
  var i662 = root || request.c( 'ScenePreloader' )
  var i663 = data
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i665 = data
  i664.cullTransparentMesh = !!i665[0]
  return i664
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.UI.Image' )
  var i667 = data
  request.r(i667[0], i667[1], 0, i666, 'm_Sprite')
  i666.m_Type = i667[2]
  i666.m_PreserveAspect = !!i667[3]
  i666.m_FillCenter = !!i667[4]
  i666.m_FillMethod = i667[5]
  i666.m_FillAmount = i667[6]
  i666.m_FillClockwise = !!i667[7]
  i666.m_FillOrigin = i667[8]
  i666.m_UseSpriteMesh = !!i667[9]
  i666.m_PixelsPerUnitMultiplier = i667[10]
  request.r(i667[11], i667[12], 0, i666, 'm_Material')
  i666.m_Maskable = !!i667[13]
  i666.m_Color = new pc.Color(i667[14], i667[15], i667[16], i667[17])
  i666.m_RaycastTarget = !!i667[18]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i669 = data
  i668.name = i669[0]
  i668.tag = i669[1]
  i668.enabled = !!i669[2]
  i668.isStatic = !!i669[3]
  i668.layer = i669[4]
  return i668
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.UI.Text' )
  var i671 = data
  i670.m_FontData = request.d('UnityEngine.UI.FontData', i671[0], i670.m_FontData)
  i670.m_Text = i671[1]
  request.r(i671[2], i671[3], 0, i670, 'm_Material')
  i670.m_Maskable = !!i671[4]
  i670.m_Color = new pc.Color(i671[5], i671[6], i671[7], i671[8])
  i670.m_RaycastTarget = !!i671[9]
  return i670
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.UI.FontData' )
  var i673 = data
  request.r(i673[0], i673[1], 0, i672, 'm_Font')
  i672.m_FontSize = i673[2]
  i672.m_FontStyle = i673[3]
  i672.m_BestFit = !!i673[4]
  i672.m_MinSize = i673[5]
  i672.m_MaxSize = i673[6]
  i672.m_Alignment = i673[7]
  i672.m_AlignByGeometry = !!i673[8]
  i672.m_RichText = !!i673[9]
  i672.m_HorizontalOverflow = i673[10]
  i672.m_VerticalOverflow = i673[11]
  i672.m_LineSpacing = i673[12]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i675 = data
  request.r(i675[0], i675[1], 0, i674, 'animatorController')
  i674.updateMode = i675[2]
  var i677 = i675[3]
  var i676 = []
  for(var i = 0; i < i677.length; i += 2) {
  request.r(i677[i + 0], i677[i + 1], 2, i676, '')
  }
  i674.humanBones = i676
  i674.enabled = !!i675[4]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i681 = data
  i680.position = new pc.Vec3( i681[0], i681[1], i681[2] )
  i680.scale = new pc.Vec3( i681[3], i681[4], i681[5] )
  i680.rotation = new pc.Quat(i681[6], i681[7], i681[8], i681[9])
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i683 = data
  i682.enabled = !!i683[0]
  i682.aspect = i683[1]
  i682.orthographic = !!i683[2]
  i682.orthographicSize = i683[3]
  i682.backgroundColor = new pc.Color(i683[4], i683[5], i683[6], i683[7])
  i682.nearClipPlane = i683[8]
  i682.farClipPlane = i683[9]
  i682.fieldOfView = i683[10]
  i682.depth = i683[11]
  i682.clearFlags = i683[12]
  i682.cullingMask = i683[13]
  i682.rect = i683[14]
  request.r(i683[15], i683[16], 0, i682, 'targetTexture')
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i685 = data
  i684.name = i685[0]
  i684.atlasId = i685[1]
  i684.mipmapCount = i685[2]
  i684.hdr = !!i685[3]
  i684.size = i685[4]
  i684.anisoLevel = i685[5]
  i684.filterMode = i685[6]
  i684.wrapMode = i685[7]
  var i687 = i685[8]
  var i686 = []
  for(var i = 0; i < i687.length; i += 4) {
    i686.push( UnityEngine.Rect.MinMaxRect(i687[i + 0], i687[i + 1], i687[i + 2], i687[i + 3]) );
  }
  i684.rects = i686
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i691 = data
  i690.name = i691[0]
  i690.index = i691[1]
  i690.startup = !!i691[2]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i693 = data
  i692.ambientIntensity = i693[0]
  i692.reflectionIntensity = i693[1]
  i692.ambientMode = i693[2]
  i692.ambientLight = new pc.Color(i693[3], i693[4], i693[5], i693[6])
  i692.ambientSkyColor = new pc.Color(i693[7], i693[8], i693[9], i693[10])
  i692.ambientGroundColor = new pc.Color(i693[11], i693[12], i693[13], i693[14])
  i692.ambientEquatorColor = new pc.Color(i693[15], i693[16], i693[17], i693[18])
  i692.fogColor = new pc.Color(i693[19], i693[20], i693[21], i693[22])
  i692.fogEndDistance = i693[23]
  i692.fogStartDistance = i693[24]
  i692.fogDensity = i693[25]
  i692.fog = !!i693[26]
  request.r(i693[27], i693[28], 0, i692, 'skybox')
  i692.fogMode = i693[29]
  var i695 = i693[30]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i695[i + 0]) );
  }
  i692.lightmaps = i694
  i692.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i693[31], i692.lightProbes)
  i692.lightmapsMode = i693[32]
  i692.environmentLightingMode = i693[33]
  i692.ambientProbe = new pc.SphericalHarmonicsL2(i693[34])
  request.r(i693[35], i693[36], 0, i692, 'customReflection')
  request.r(i693[37], i693[38], 0, i692, 'defaultReflection')
  i692.defaultReflectionMode = i693[39]
  i692.defaultReflectionResolution = i693[40]
  i692.sunLightObjectId = i693[41]
  i692.pixelLightCount = i693[42]
  i692.defaultReflectionHDR = !!i693[43]
  i692.hasLightDataAsset = !!i693[44]
  i692.hasManualGenerate = !!i693[45]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i699 = data
  request.r(i699[0], i699[1], 0, i698, 'lightmapColor')
  request.r(i699[2], i699[3], 0, i698, 'lightmapDirection')
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i700 = root || new UnityEngine.LightProbes()
  var i701 = data
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i709 = data
  i708.enabled = !!i709[0]
  i708.isTrigger = !!i709[1]
  request.r(i709[2], i709[3], 0, i708, 'material')
  i708.center = new pc.Vec3( i709[4], i709[5], i709[6] )
  i708.radius = i709[7]
  return i708
}

Deserializers["UnselectedColliderDrawer"] = function (request, data, root) {
  var i710 = root || request.c( 'UnselectedColliderDrawer' )
  var i711 = data
  return i710
}

Deserializers["WheatPieceDestroyer"] = function (request, data, root) {
  var i712 = root || request.c( 'WheatPieceDestroyer' )
  var i713 = data
  return i712
}

Deserializers["WheatPieceRandomizer"] = function (request, data, root) {
  var i714 = root || request.c( 'WheatPieceRandomizer' )
  var i715 = data
  request.r(i715[0], i715[1], 0, i714, 'partsParent')
  return i714
}

Deserializers["DisableIfTooFar"] = function (request, data, root) {
  var i716 = root || request.c( 'DisableIfTooFar' )
  var i717 = data
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i719 = data
  request.r(i719[0], i719[1], 0, i718, 'sharedMesh')
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i721 = data
  request.r(i721[0], i721[1], 0, i720, 'additionalVertexStreams')
  i720.enabled = !!i721[2]
  request.r(i721[3], i721[4], 0, i720, 'sharedMaterial')
  var i723 = i721[5]
  var i722 = []
  for(var i = 0; i < i723.length; i += 2) {
  request.r(i723[i + 0], i723[i + 1], 2, i722, '')
  }
  i720.sharedMaterials = i722
  i720.receiveShadows = !!i721[6]
  i720.shadowCastingMode = i721[7]
  i720.sortingLayerID = i721[8]
  i720.sortingOrder = i721[9]
  i720.lightmapIndex = i721[10]
  i720.lightmapSceneIndex = i721[11]
  i720.lightmapScaleOffset = new pc.Vec4( i721[12], i721[13], i721[14], i721[15] )
  i720.lightProbeUsage = i721[16]
  i720.reflectionProbeUsage = i721[17]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i727 = data
  i726.name = i727[0]
  i726.halfPrecision = !!i727[1]
  i726.vertexCount = i727[2]
  i726.aabb = i727[3]
  var i729 = i727[4]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( !!i729[i + 0] );
  }
  i726.streams = i728
  i726.vertices = i727[5]
  var i731 = i727[6]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i731[i + 0]) );
  }
  i726.subMeshes = i730
  var i733 = i727[7]
  var i732 = []
  for(var i = 0; i < i733.length; i += 16) {
    i732.push( new pc.Mat4().setData(i733[i + 0], i733[i + 1], i733[i + 2], i733[i + 3],  i733[i + 4], i733[i + 5], i733[i + 6], i733[i + 7],  i733[i + 8], i733[i + 9], i733[i + 10], i733[i + 11],  i733[i + 12], i733[i + 13], i733[i + 14], i733[i + 15]) );
  }
  i726.bindposes = i732
  var i735 = i727[8]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i735[i + 0]) );
  }
  i726.blendShapes = i734
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i741 = data
  i740.triangles = i741[0]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i747 = data
  i746.name = i747[0]
  var i749 = i747[1]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i749[i + 0]) );
  }
  i746.frames = i748
  return i746
}

Deserializers["DamagingObstacle"] = function (request, data, root) {
  var i750 = root || request.c( 'DamagingObstacle' )
  var i751 = data
  request.r(i751[0], i751[1], 0, i750, 'parts')
  i750.m_damage = i751[2]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i753 = data
  i752.enabled = !!i753[0]
  request.r(i753[1], i753[2], 0, i752, 'sharedMaterial')
  var i755 = i753[3]
  var i754 = []
  for(var i = 0; i < i755.length; i += 2) {
  request.r(i755[i + 0], i755[i + 1], 2, i754, '')
  }
  i752.sharedMaterials = i754
  i752.receiveShadows = !!i753[4]
  i752.shadowCastingMode = i753[5]
  i752.sortingLayerID = i753[6]
  i752.sortingOrder = i753[7]
  i752.lightmapIndex = i753[8]
  i752.lightmapSceneIndex = i753[9]
  i752.lightmapScaleOffset = new pc.Vec4( i753[10], i753[11], i753[12], i753[13] )
  i752.lightProbeUsage = i753[14]
  i752.reflectionProbeUsage = i753[15]
  request.r(i753[16], i753[17], 0, i752, 'mesh')
  i752.meshCount = i753[18]
  i752.activeVertexStreamsCount = i753[19]
  i752.alignment = i753[20]
  i752.renderMode = i753[21]
  i752.sortMode = i753[22]
  i752.lengthScale = i753[23]
  i752.velocityScale = i753[24]
  i752.cameraVelocityScale = i753[25]
  i752.normalDirection = i753[26]
  i752.sortingFudge = i753[27]
  i752.minParticleSize = i753[28]
  i752.maxParticleSize = i753[29]
  i752.pivot = new pc.Vec3( i753[30], i753[31], i753[32] )
  request.r(i753[33], i753[34], 0, i752, 'trailMaterial')
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i757 = data
  i756.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i757[0], i756.main)
  i756.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i757[1], i756.colorBySpeed)
  i756.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i757[2], i756.colorOverLifetime)
  i756.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i757[3], i756.emission)
  i756.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i757[4], i756.rotationBySpeed)
  i756.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i757[5], i756.rotationOverLifetime)
  i756.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i757[6], i756.shape)
  i756.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i757[7], i756.sizeBySpeed)
  i756.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i757[8], i756.sizeOverLifetime)
  i756.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i757[9], i756.textureSheetAnimation)
  i756.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i757[10], i756.velocityOverLifetime)
  i756.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i757[11], i756.noise)
  i756.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i757[12], i756.inheritVelocity)
  i756.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i757[13], i756.forceOverLifetime)
  i756.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i757[14], i756.limitVelocityOverLifetime)
  i756.useAutoRandomSeed = !!i757[15]
  i756.randomSeed = i757[16]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i758 = root || new pc.ParticleSystemMain()
  var i759 = data
  i758.duration = i759[0]
  i758.loop = !!i759[1]
  i758.prewarm = !!i759[2]
  i758.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[3], i758.startDelay)
  i758.startDelayMultiplier = i759[4]
  i758.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[5], i758.startLifetime)
  i758.startLifetimeMultiplier = i759[6]
  i758.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[7], i758.startSpeed)
  i758.startSpeedMultiplier = i759[8]
  i758.startSize3D = !!i759[9]
  i758.startSize = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[10], i758.startSize)
  i758.startSizeMultiplier = i759[11]
  i758.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[12], i758.startSizeX)
  i758.startSizeXMultiplier = i759[13]
  i758.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[14], i758.startSizeY)
  i758.startSizeYMultiplier = i759[15]
  i758.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[16], i758.startSizeZ)
  i758.startSizeZMultiplier = i759[17]
  i758.startRotation3D = !!i759[18]
  i758.startRotation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[19], i758.startRotation)
  i758.startRotationMultiplier = i759[20]
  i758.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[21], i758.startRotationX)
  i758.startRotationXMultiplier = i759[22]
  i758.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[23], i758.startRotationY)
  i758.startRotationYMultiplier = i759[24]
  i758.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[25], i758.startRotationZ)
  i758.startRotationZMultiplier = i759[26]
  i758.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i759[27], i758.startColor)
  i758.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[28], i758.gravityModifier)
  i758.gravityModifierMultiplier = i759[29]
  i758.simulationSpace = i759[30]
  request.r(i759[31], i759[32], 0, i758, 'customSimulationSpace')
  i758.simulationSpeed = i759[33]
  i758.useUnscaledTime = !!i759[34]
  i758.scalingMode = i759[35]
  i758.playOnAwake = !!i759[36]
  i758.maxParticles = i759[37]
  i758.emitterVelocityMode = i759[38]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i760 = root || new pc.MinMaxCurve()
  var i761 = data
  i760.m_Mode = i761[0]
  i760.m_CurveMin = new pc.AnimationCurve( { keys_flow: i761[1] } )
  i760.m_CurveMax = new pc.AnimationCurve( { keys_flow: i761[2] } )
  i760.m_CurveMultiplier = i761[3]
  i760.m_ConstantMin = i761[4]
  i760.m_ConstantMax = i761[5]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i762 = root || new pc.MinMaxGradient()
  var i763 = data
  i762.m_Mode = i763[0]
  i762.m_GradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i763[1], i762.m_GradientMin)
  i762.m_GradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i763[2], i762.m_GradientMax)
  i762.m_ColorMin = new pc.Color(i763[3], i763[4], i763[5], i763[6])
  i762.m_ColorMax = new pc.Color(i763[7], i763[8], i763[9], i763[10])
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i765 = data
  i764.mode = i765[0]
  var i767 = i765[1]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i767[i + 0]) );
  }
  i764.colorKeys = i766
  var i769 = i765[2]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i769[i + 0]) );
  }
  i764.alphaKeys = i768
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i770 = root || new pc.ParticleSystemColorBySpeed()
  var i771 = data
  i770.enabled = !!i771[0]
  i770.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i771[1], i770.color)
  i770.range = new pc.Vec2( i771[2], i771[3] )
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i775 = data
  i774.color = new pc.Color(i775[0], i775[1], i775[2], i775[3])
  i774.time = i775[4]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i779 = data
  i778.alpha = i779[0]
  i778.time = i779[1]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i780 = root || new pc.ParticleSystemColorOverLifetime()
  var i781 = data
  i780.enabled = !!i781[0]
  i780.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i781[1], i780.color)
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i782 = root || new pc.ParticleSystemEmitter()
  var i783 = data
  i782.enabled = !!i783[0]
  i782.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[1], i782.rateOverTime)
  i782.rateOverTimeMultiplier = i783[2]
  i782.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[3], i782.rateOverDistance)
  i782.rateOverDistanceMultiplier = i783[4]
  var i785 = i783[5]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i785[i + 0]) );
  }
  i782.bursts = i784
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i788 = root || new pc.ParticleSystemBurst()
  var i789 = data
  i788.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[0], i788.count)
  i788.cycleCount = i789[1]
  i788.minCount = i789[2]
  i788.maxCount = i789[3]
  i788.repeatInterval = i789[4]
  i788.time = i789[5]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i790 = root || new pc.ParticleSystemRotationBySpeed()
  var i791 = data
  i790.enabled = !!i791[0]
  i790.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[1], i790.x)
  i790.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[2], i790.y)
  i790.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[3], i790.z)
  i790.xMultiplier = i791[4]
  i790.yMultiplier = i791[5]
  i790.zMultiplier = i791[6]
  i790.separateAxes = !!i791[7]
  i790.range = new pc.Vec2( i791[8], i791[9] )
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i792 = root || new pc.ParticleSystemRotationOverLifetime()
  var i793 = data
  i792.enabled = !!i793[0]
  i792.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[1], i792.x)
  i792.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[2], i792.y)
  i792.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[3], i792.z)
  i792.xMultiplier = i793[4]
  i792.yMultiplier = i793[5]
  i792.zMultiplier = i793[6]
  i792.separateAxes = !!i793[7]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i794 = root || new pc.ParticleSystemShape()
  var i795 = data
  i794.enabled = !!i795[0]
  i794.shapeType = i795[1]
  i794.randomDirectionAmount = i795[2]
  i794.sphericalDirectionAmount = i795[3]
  i794.randomPositionAmount = i795[4]
  i794.alignToDirection = !!i795[5]
  i794.radius = i795[6]
  i794.radiusMode = i795[7]
  i794.radiusSpread = i795[8]
  i794.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[9], i794.radiusSpeed)
  i794.radiusSpeedMultiplier = i795[10]
  i794.radiusThickness = i795[11]
  i794.angle = i795[12]
  i794.length = i795[13]
  i794.boxThickness = new pc.Vec3( i795[14], i795[15], i795[16] )
  i794.meshShapeType = i795[17]
  request.r(i795[18], i795[19], 0, i794, 'mesh')
  request.r(i795[20], i795[21], 0, i794, 'meshRenderer')
  request.r(i795[22], i795[23], 0, i794, 'skinnedMeshRenderer')
  i794.useMeshMaterialIndex = !!i795[24]
  i794.meshMaterialIndex = i795[25]
  i794.useMeshColors = !!i795[26]
  i794.normalOffset = i795[27]
  i794.arc = i795[28]
  i794.arcMode = i795[29]
  i794.arcSpread = i795[30]
  i794.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[31], i794.arcSpeed)
  i794.arcSpeedMultiplier = i795[32]
  i794.donutRadius = i795[33]
  i794.position = new pc.Vec3( i795[34], i795[35], i795[36] )
  i794.rotation = new pc.Vec3( i795[37], i795[38], i795[39] )
  i794.scale = new pc.Vec3( i795[40], i795[41], i795[42] )
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i796 = root || new pc.ParticleSystemSizeBySpeed()
  var i797 = data
  i796.enabled = !!i797[0]
  i796.size = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[1], i796.size)
  i796.sizeMultiplier = i797[2]
  i796.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[3], i796.x)
  i796.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[4], i796.y)
  i796.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[5], i796.z)
  i796.xMultiplier = i797[6]
  i796.yMultiplier = i797[7]
  i796.zMultiplier = i797[8]
  i796.separateAxes = !!i797[9]
  i796.range = new pc.Vec2( i797[10], i797[11] )
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i798 = root || new pc.ParticleSystemSizeOverLifetime()
  var i799 = data
  i798.enabled = !!i799[0]
  i798.size = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[1], i798.size)
  i798.sizeMultiplier = i799[2]
  i798.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[3], i798.x)
  i798.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[4], i798.y)
  i798.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[5], i798.z)
  i798.xMultiplier = i799[6]
  i798.yMultiplier = i799[7]
  i798.zMultiplier = i799[8]
  i798.separateAxes = !!i799[9]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i800 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i801 = data
  i800.enabled = !!i801[0]
  i800.mode = i801[1]
  i800.animation = i801[2]
  i800.numTilesX = i801[3]
  i800.numTilesY = i801[4]
  i800.useRandomRow = !!i801[5]
  i800.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[6], i800.frameOverTime)
  i800.frameOverTimeMultiplier = i801[7]
  i800.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[8], i800.startFrame)
  i800.startFrameMultiplier = i801[9]
  i800.cycleCount = i801[10]
  i800.rowIndex = i801[11]
  i800.flipU = i801[12]
  i800.flipV = i801[13]
  i800.spriteCount = i801[14]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i802 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i803 = data
  i802.enabled = !!i803[0]
  i802.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[1], i802.x)
  i802.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[2], i802.y)
  i802.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[3], i802.z)
  i802.xMultiplier = i803[4]
  i802.yMultiplier = i803[5]
  i802.zMultiplier = i803[6]
  i802.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[7], i802.speedModifier)
  i802.speedModifierMultiplier = i803[8]
  i802.space = i803[9]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i804 = root || new pc.ParticleSystemNoise()
  var i805 = data
  i804.enabled = !!i805[0]
  i804.separateAxes = !!i805[1]
  i804.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[2], i804.strengthX)
  i804.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[3], i804.strengthY)
  i804.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[4], i804.strengthZ)
  i804.strengthXMultiplier = i805[5]
  i804.strengthYMultiplier = i805[6]
  i804.strengthZMultiplier = i805[7]
  i804.frequency = i805[8]
  i804.damping = !!i805[9]
  i804.octaveCount = i805[10]
  i804.octaveMultiplier = i805[11]
  i804.octaveScale = i805[12]
  i804.quality = i805[13]
  i804.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[14], i804.scrollSpeed)
  i804.scrollSpeedMultiplier = i805[15]
  i804.remapEnabled = !!i805[16]
  i804.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[17], i804.remapX)
  i804.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[18], i804.remapY)
  i804.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[19], i804.remapZ)
  i804.remapXMultiplier = i805[20]
  i804.remapYMultiplier = i805[21]
  i804.remapZMultiplier = i805[22]
  i804.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[23], i804.positionAmount)
  i804.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[24], i804.rotationAmount)
  i804.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[25], i804.sizeAmount)
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i806 = root || new pc.ParticleSystemInheritVelocity()
  var i807 = data
  i806.enabled = !!i807[0]
  i806.mode = i807[1]
  i806.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[2], i806.curve)
  i806.curveMultiplier = i807[3]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i808 = root || new pc.ParticleSystemForceOverLifetime()
  var i809 = data
  i808.enabled = !!i809[0]
  i808.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[1], i808.x)
  i808.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[2], i808.y)
  i808.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[3], i808.z)
  i808.xMultiplier = i809[4]
  i808.yMultiplier = i809[5]
  i808.zMultiplier = i809[6]
  i808.space = i809[7]
  i808.randomized = !!i809[8]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i810 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i811 = data
  i810.enabled = !!i811[0]
  i810.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[1], i810.limit)
  i810.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[2], i810.limitX)
  i810.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[3], i810.limitY)
  i810.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[4], i810.limitZ)
  i810.limitMultiplier = i811[5]
  i810.limitXMultiplier = i811[6]
  i810.limitYMultiplier = i811[7]
  i810.limitZMultiplier = i811[8]
  i810.dampen = i811[9]
  i810.separateAxes = !!i811[10]
  i810.space = i811[11]
  i810.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[12], i810.drag)
  i810.dragMultiplier = i811[13]
  i810.multiplyDragByParticleSize = !!i811[14]
  i810.multiplyDragByParticleVelocity = !!i811[15]
  return i810
}

Deserializers["LootableItem"] = function (request, data, root) {
  var i812 = root || request.c( 'LootableItem' )
  var i813 = data
  i812.OnLootableItemCollected = request.d('LootableItemEvent', i813[0], i812.OnLootableItemCollected)
  request.r(i813[1], i813[2], 0, i812, 'item')
  i812.kind = i813[3]
  return i812
}

Deserializers["LootableItemEvent"] = function (request, data, root) {
  var i814 = root || request.c( 'LootableItemEvent' )
  var i815 = data
  i814.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i815[0], i814.m_PersistentCalls)
  return i814
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i816 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i817 = data
  var i819 = i817[0]
  var i818 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i819.length; i += 1) {
    i818.add(request.d('UnityEngine.Events.PersistentCall', i819[i + 0]));
  }
  i816.m_Calls = i818
  return i816
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i822 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i823 = data
  request.r(i823[0], i823[1], 0, i822, 'm_Target')
  i822.m_MethodName = i823[2]
  i822.m_Mode = i823[3]
  i822.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i823[4], i822.m_Arguments)
  i822.m_CallState = i823[5]
  return i822
}

Deserializers["LightPole"] = function (request, data, root) {
  var i824 = root || request.c( 'LightPole' )
  var i825 = data
  return i824
}

Deserializers["UIActiveBoost"] = function (request, data, root) {
  var i826 = root || request.c( 'UIActiveBoost' )
  var i827 = data
  i826.TimeLeft = i827[0]
  request.r(i827[1], i827[2], 0, i826, 'imgIcon')
  request.r(i827[3], i827[4], 0, i826, 'txtTimer')
  var i829 = i827[5]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( request.d('UIActiveBoost+SpriteByKind', i829[i + 0]) );
  }
  i826.sprites = i828
  i826.Kind = i827[6]
  return i826
}

Deserializers["UIActiveBoost+SpriteByKind"] = function (request, data, root) {
  var i832 = root || request.c( 'UIActiveBoost+SpriteByKind' )
  var i833 = data
  i832.Kind = i833[0]
  request.r(i833[1], i833[2], 0, i832, 'Sprite')
  return i832
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i834 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i835 = data
  i834.m_IgnoreLayout = !!i835[0]
  i834.m_MinWidth = i835[1]
  i834.m_MinHeight = i835[2]
  i834.m_PreferredWidth = i835[3]
  i834.m_PreferredHeight = i835[4]
  i834.m_FlexibleWidth = i835[5]
  i834.m_FlexibleHeight = i835[6]
  i834.m_LayoutPriority = i835[7]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i837 = data
  i836.mass = i837[0]
  i836.drag = i837[1]
  i836.angularDrag = i837[2]
  i836.useGravity = !!i837[3]
  i836.isKinematic = !!i837[4]
  i836.constraints = i837[5]
  i836.maxAngularVelocity = i837[6]
  i836.collisionDetectionMode = i837[7]
  i836.interpolation = i837[8]
  return i836
}

Deserializers["CarController"] = function (request, data, root) {
  var i838 = root || request.c( 'CarController' )
  var i839 = data
  var i841 = i839[0]
  var i840 = []
  for(var i = 0; i < i841.length; i += 2) {
  request.r(i841[i + 0], i841[i + 1], 2, i840, '')
  }
  i838.m_WheelColliders = i840
  i838.TorqueMultiplier = i839[1]
  i838.m_CarDriveType = i839[2]
  var i843 = i839[3]
  var i842 = []
  for(var i = 0; i < i843.length; i += 2) {
  request.r(i843[i + 0], i843[i + 1], 2, i842, '')
  }
  i838.m_WheelMeshes = i842
  var i845 = i839[4]
  var i844 = []
  for(var i = 0; i < i845.length; i += 2) {
  request.r(i845[i + 0], i845[i + 1], 2, i844, '')
  }
  i838.m_WheelEffects = i844
  i838.m_CentreOfMassOffset = new pc.Vec3( i839[5], i839[6], i839[7] )
  i838.m_MaximumSteerAngle = i839[8]
  i838.m_SteerHelper = i839[9]
  i838.m_TractionControl = i839[10]
  i838.m_FullTorqueOverAllWheels = i839[11]
  i838.m_ReverseTorque = i839[12]
  i838.m_MaxHandbrakeTorque = i839[13]
  i838.m_Downforce = i839[14]
  i838.m_SpeedType = i839[15]
  i838.m_Topspeed = i839[16]
  i838.m_RevRangeBoundary = i839[17]
  i838.m_SlipLimit = i839[18]
  i838.m_BrakeTorque = i839[19]
  i838.m_GearNum = i839[20]
  request.r(i839[21], i839[22], 0, i838, 'm_Rigidbody')
  return i838
}

Deserializers["CarUserControl"] = function (request, data, root) {
  var i852 = root || request.c( 'CarUserControl' )
  var i853 = data
  i852.CanMove = !!i853[0]
  request.r(i853[1], i853[2], 0, i852, 'pathCreator')
  request.r(i853[3], i853[4], 0, i852, 'playerCarrot')
  request.r(i853[5], i853[6], 0, i852, 'farPointInDirectionOfView')
  request.r(i853[7], i853[8], 0, i852, 'ghostWriter')
  request.r(i853[9], i853[10], 0, i852, 'carBody')
  request.r(i853[11], i853[12], 0, i852, 'collisionParticlesLeft')
  request.r(i853[13], i853[14], 0, i852, 'collisionParticlesRight')
  return i852
}

Deserializers["UnityStandardAssets.Vehicles.Car.CarAudio"] = function (request, data, root) {
  var i854 = root || request.c( 'UnityStandardAssets.Vehicles.Car.CarAudio' )
  var i855 = data
  i854.engineSoundStyle = i855[0]
  request.r(i855[1], i855[2], 0, i854, 'lowAccelClip')
  request.r(i855[3], i855[4], 0, i854, 'lowDecelClip')
  request.r(i855[5], i855[6], 0, i854, 'highAccelClip')
  request.r(i855[7], i855[8], 0, i854, 'highDecelClip')
  i854.pitchMultiplier = i855[9]
  i854.lowPitchMin = i855[10]
  i854.lowPitchMax = i855[11]
  i854.highPitchMultiplier = i855[12]
  i854.maxRolloffDistance = i855[13]
  i854.dopplerLevel = i855[14]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i857 = data
  i856.center = new pc.Vec3( i857[0], i857[1], i857[2] )
  i856.size = new pc.Vec3( i857[3], i857[4], i857[5] )
  i856.enabled = !!i857[6]
  i856.isTrigger = !!i857[7]
  request.r(i857[8], i857[9], 0, i856, 'material')
  return i856
}

Deserializers["RaceCar"] = function (request, data, root) {
  var i858 = root || request.c( 'RaceCar' )
  var i859 = data
  i858.Owner = i859[0]
  i858.Score = i859[1]
  request.r(i859[2], i859[3], 0, i858, 'boosts')
  request.r(i859[4], i859[5], 0, i858, 'products')
  request.r(i859[6], i859[7], 0, i858, 'boostsEffectPosition')
  request.r(i859[8], i859[9], 0, i858, 'effectSheildPrefab')
  request.r(i859[10], i859[11], 0, i858, 'effectDoublePrefab')
  return i858
}

Deserializers["HealthController"] = function (request, data, root) {
  var i860 = root || request.c( 'HealthController' )
  var i861 = data
  i860.Health = i861[0]
  i860.MaxHealth = i861[1]
  i860.Shield = i861[2]
  i860.MaxShield = i861[3]
  request.r(i861[4], i861[5], 0, i860, 'MainScreen')
  request.r(i861[6], i861[7], 0, i860, 'LossScreen')
  request.r(i861[8], i861[9], 0, i860, 'boosts')
  return i860
}

Deserializers["Gun"] = function (request, data, root) {
  var i862 = root || request.c( 'Gun' )
  var i863 = data
  request.r(i863[0], i863[1], 0, i862, 'rocketPrefab')
  request.r(i863[2], i863[3], 0, i862, 'carUserControl')
  request.r(i863[4], i863[5], 0, i862, 'products')
  return i862
}

Deserializers["JustWheelMeshes"] = function (request, data, root) {
  var i864 = root || request.c( 'JustWheelMeshes' )
  var i865 = data
  var i867 = i865[0]
  var i866 = []
  for(var i = 0; i < i867.length; i += 2) {
  request.r(i867[i + 0], i867[i + 1], 2, i866, '')
  }
  i864.m_WheelMeshes = i866
  return i864
}

Deserializers["BlobShadowMovement"] = function (request, data, root) {
  var i868 = root || request.c( 'BlobShadowMovement' )
  var i869 = data
  request.r(i869[0], i869[1], 0, i868, 'Target')
  i868.Offset = new pc.Vec3( i869[2], i869[3], i869[4] )
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i871 = data
  request.r(i871[0], i871[1], 0, i870, 'clip')
  i870.playOnAwake = !!i871[2]
  i870.loop = !!i871[3]
  i870.enabled = !!i871[4]
  return i870
}

Deserializers["WheelEffects"] = function (request, data, root) {
  var i872 = root || request.c( 'WheelEffects' )
  var i873 = data
  request.r(i873[0], i873[1], 0, i872, 'SkidTrailPrefab')
  request.r(i873[2], i873[3], 0, i872, 'skidParticles')
  return i872
}

Deserializers["Rocket"] = function (request, data, root) {
  var i874 = root || request.c( 'Rocket' )
  var i875 = data
  request.r(i875[0], i875[1], 0, i874, 'jetStream')
  request.r(i875[2], i875[3], 0, i874, 'explosionPrefab')
  return i874
}

Deserializers["Explosion"] = function (request, data, root) {
  var i876 = root || request.c( 'Explosion' )
  var i877 = data
  request.r(i877[0], i877[1], 0, i876, 'explosionParticleSystem')
  return i876
}

Deserializers["DriverDescription"] = function (request, data, root) {
  var i878 = root || request.c( 'DriverDescription' )
  var i879 = data
  var i881 = i879[0]
  var i880 = []
  for(var i = 0; i < i881.length; i += 2) {
  request.r(i881[i + 0], i881[i + 1], 2, i880, '')
  }
  i878.driverPrefab = i880
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i883 = data
  i882.enabled = !!i883[0]
  request.r(i883[1], i883[2], 0, i882, 'sharedMaterial')
  var i885 = i883[3]
  var i884 = []
  for(var i = 0; i < i885.length; i += 2) {
  request.r(i885[i + 0], i885[i + 1], 2, i884, '')
  }
  i882.sharedMaterials = i884
  i882.receiveShadows = !!i883[4]
  i882.shadowCastingMode = i883[5]
  i882.sortingLayerID = i883[6]
  i882.sortingOrder = i883[7]
  i882.lightmapIndex = i883[8]
  i882.lightmapSceneIndex = i883[9]
  i882.lightmapScaleOffset = new pc.Vec4( i883[10], i883[11], i883[12], i883[13] )
  i882.lightProbeUsage = i883[14]
  i882.reflectionProbeUsage = i883[15]
  request.r(i883[16], i883[17], 0, i882, 'sharedMesh')
  var i887 = i883[18]
  var i886 = []
  for(var i = 0; i < i887.length; i += 2) {
  request.r(i887[i + 0], i887[i + 1], 2, i886, '')
  }
  i882.bones = i886
  i882.updateWhenOffscreen = !!i883[19]
  i882.localBounds = i883[20]
  request.r(i883[21], i883[22], 0, i882, 'rootBone')
  var i889 = i883[23]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i889[i + 0]) );
  }
  i882.blendShapesWeights = i888
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i893 = data
  i892.weight = i893[0]
  return i892
}

Deserializers["TrackHandles"] = function (request, data, root) {
  var i894 = root || request.c( 'TrackHandles' )
  var i895 = data
  request.r(i895[0], i895[1], 0, i894, 'MainPath')
  i894.OnFinishReached = request.d('UnityEngine.Events.UnityEvent', i895[2], i894.OnFinishReached)
  request.r(i895[3], i895[4], 0, i894, 'Root')
  return i894
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i896 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i897 = data
  i896.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i897[0], i896.m_PersistentCalls)
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i899 = data
  i898.enabled = !!i899[0]
  i898.isTrigger = !!i899[1]
  request.r(i899[2], i899[3], 0, i898, 'material')
  request.r(i899[4], i899[5], 0, i898, 'sharedMesh')
  i898.convex = !!i899[6]
  return i898
}

Deserializers["FinishTrigger"] = function (request, data, root) {
  var i900 = root || request.c( 'FinishTrigger' )
  var i901 = data
  request.r(i901[0], i901[1], 0, i900, 'trackHandles')
  return i900
}

Deserializers["PathCreation.PathCreator"] = function (request, data, root) {
  var i902 = root || request.c( 'PathCreation.PathCreator' )
  var i903 = data
  i902.editorData = request.d('PathCreation.PathCreatorData', i903[0], i902.editorData)
  i902.initialized = !!i903[1]
  return i902
}

Deserializers["PathCreation.PathCreatorData"] = function (request, data, root) {
  var i904 = root || request.c( 'PathCreation.PathCreatorData' )
  var i905 = data
  i904.vertexPathMaxAngleError = i905[0]
  i904.vertexPathMinVertexSpacing = i905[1]
  i904.showTransformTool = !!i905[2]
  i904.showPathBounds = !!i905[3]
  i904.showPerSegmentBounds = !!i905[4]
  i904.displayAnchorPoints = !!i905[5]
  i904.displayControlPoints = !!i905[6]
  i904.bezierHandleScale = i905[7]
  i904.globalDisplaySettingsFoldout = !!i905[8]
  i904.keepConstantHandleSize = !!i905[9]
  i904.showNormalsInVertexMode = !!i905[10]
  i904.showBezierPathInVertexMode = !!i905[11]
  i904.showDisplayOptions = !!i905[12]
  i904.showPathOptions = !!i905[13]
  i904.showVertexPathDisplayOptions = !!i905[14]
  i904.showVertexPathOptions = !!i905[15]
  i904.showNormals = !!i905[16]
  i904.showNormalsHelpInfo = !!i905[17]
  i904.tabIndex = i905[18]
  i904._bezierPath = request.d('PathCreation.BezierPath', i905[19], i904._bezierPath)
  i904.vertexPathUpToDate = !!i905[20]
  return i904
}

Deserializers["PathCreation.BezierPath"] = function (request, data, root) {
  var i906 = root || request.c( 'PathCreation.BezierPath' )
  var i907 = data
  var i909 = i907[0]
  var i908 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i909.length; i += 3) {
    i908.add(new pc.Vec3( i909[i + 0], i909[i + 1], i909[i + 2] ));
  }
  i906.points = i908
  i906.isClosed = !!i907[1]
  i906.space = i907[2]
  i906.controlMode = i907[3]
  i906.autoControlLength = i907[4]
  i906.boundsUpToDate = !!i907[5]
  var i911 = i907[6]
  var i910 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i911.length; i += 1) {
    i910.add(i911[i + 0]);
  }
  i906.perAnchorNormalsAngle = i910
  i906.globalNormalsAngle = i907[7]
  i906.flipNormals = !!i907[8]
  return i906
}

Deserializers["GameManager"] = function (request, data, root) {
  var i916 = root || request.c( 'GameManager' )
  var i917 = data
  request.r(i917[0], i917[1], 0, i916, 'MainCamera')
  i916.LandscapeFov = i917[2]
  i916.PortraitFov = i917[3]
  i916.WheatCullDistance = i917[4]
  request.r(i917[5], i917[6], 0, i916, 'CountdownWidget')
  request.r(i917[7], i917[8], 0, i916, 'TutorialWindow')
  request.r(i917[9], i917[10], 0, i916, 'MainBackroundImage')
  request.r(i917[11], i917[12], 0, i916, 'WinScreen')
  request.r(i917[13], i917[14], 0, i916, 'LoseScreen')
  request.r(i917[15], i917[16], 0, i916, 'MainScreen')
  request.r(i917[17], i917[18], 0, i916, 'btnLeft')
  request.r(i917[19], i917[20], 0, i916, 'btnRight')
  request.r(i917[21], i917[22], 0, i916, 'healthBar')
  var i919 = i917[23]
  var i918 = []
  for(var i = 0; i < i919.length; i += 2) {
  request.r(i919[i + 0], i919[i + 1], 2, i918, '')
  }
  i916.Opponents = i918
  request.r(i917[24], i917[25], 0, i916, 'PlayerCar')
  request.r(i917[26], i917[27], 0, i916, 'CarUserControl')
  i916.Position = i917[28]
  request.r(i917[29], i917[30], 0, i916, 'LastCheckpoint')
  request.r(i917[31], i917[32], 0, i916, 'healthController')
  var i921 = i917[33]
  var i920 = []
  for(var i = 0; i < i921.length; i += 2) {
  request.r(i921[i + 0], i921[i + 1], 2, i920, '')
  }
  i916.tracktors = i920
  var i923 = i917[34]
  var i922 = []
  for(var i = 0; i < i923.length; i += 2) {
  request.r(i923[i + 0], i923[i + 1], 2, i922, '')
  }
  i916.drivers = i922
  var i925 = i917[35]
  var i924 = []
  for(var i = 0; i < i925.length; i += 2) {
  request.r(i925[i + 0], i925[i + 1], 2, i924, '')
  }
  i916.trackPrefabs = i924
  request.r(i917[36], i917[37], 0, i916, 'trackParent')
  i916._WheatCullDistance = i917[38]
  request.r(i917[39], i917[40], 0, i916, 'trackContentGenerator')
  request.r(i917[41], i917[42], 0, i916, 'wheatGenerator')
  request.r(i917[43], i917[44], 0, i916, 'ghostReader')
  return i916
}

Deserializers["LunaUIFields"] = function (request, data, root) {
  var i930 = root || request.c( 'LunaUIFields' )
  var i931 = data
  request.r(i931[0], i931[1], 0, i930, 'ObjectiveHintText')
  i930.ObjectiveHintString = i931[2]
  request.r(i931[3], i931[4], 0, i930, 'LevelFailedButtonText')
  i930.LevelFailedButtonString = i931[5]
  request.r(i931[6], i931[7], 0, i930, 'LevelCompleteButtonText')
  i930.LevelCompleteButtonString = i931[8]
  return i930
}

Deserializers["WheatGenerator"] = function (request, data, root) {
  var i932 = root || request.c( 'WheatGenerator' )
  var i933 = data
  request.r(i933[0], i933[1], 0, i932, 'wheatPiece')
  request.r(i933[2], i933[3], 0, i932, 'trackContentGenerator')
  request.r(i933[4], i933[5], 0, i932, 'carUserControl')
  return i932
}

Deserializers["Products"] = function (request, data, root) {
  var i934 = root || request.c( 'Products' )
  var i935 = data
  i934.OnProductsNumberChanged = request.d('ProductsEvent', i935[0], i934.OnProductsNumberChanged)
  return i934
}

Deserializers["ProductsEvent"] = function (request, data, root) {
  var i936 = root || request.c( 'ProductsEvent' )
  var i937 = data
  i936.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i937[0], i936.m_PersistentCalls)
  return i936
}

Deserializers["TrackContentGenerator"] = function (request, data, root) {
  var i938 = root || request.c( 'TrackContentGenerator' )
  var i939 = data
  request.r(i939[0], i939[1], 0, i938, 'healthController')
  var i941 = i939[2]
  var i940 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i941.length; i += 2) {
  request.r(i941[i + 0], i941[i + 1], 1, i940, '')
  }
  i938.AlreadyGenerated = i940
  request.r(i939[3], i939[4], 0, i938, 'parentForPlacing')
  var i943 = i939[5]
  var i942 = []
  for(var i = 0; i < i943.length; i += 2) {
  request.r(i943[i + 0], i943[i + 1], 2, i942, '')
  }
  i938.obstaclesPrefabs = i942
  var i945 = i939[6]
  var i944 = []
  for(var i = 0; i < i945.length; i += 2) {
  request.r(i945[i + 0], i945[i + 1], 2, i944, '')
  }
  i938.hardObstaclesPrefabs = i944
  var i947 = i939[7]
  var i946 = []
  for(var i = 0; i < i947.length; i += 2) {
  request.r(i947[i + 0], i947[i + 1], 2, i946, '')
  }
  i938.bonusesPrefabs = i946
  request.r(i939[8], i939[9], 0, i938, 'configFile')
  request.r(i939[10], i939[11], 0, i938, 'products')
  request.r(i939[12], i939[13], 0, i938, 'boosts')
  return i938
}

Deserializers["Boosts"] = function (request, data, root) {
  var i950 = root || request.c( 'Boosts' )
  var i951 = data
  var i953 = i951[0]
  var i952 = new (System.Collections.Generic.List$1(Bridge.ns('Boosts+DataItem')))
  for(var i = 0; i < i953.length; i += 1) {
    i952.add(request.d('Boosts+DataItem', i953[i + 0]));
  }
  i950.Data = i952
  return i950
}

Deserializers["Boosts+DataItem"] = function (request, data, root) {
  var i956 = root || request.c( 'Boosts+DataItem' )
  var i957 = data
  i956.Kind = i957[0]
  i956.TimeLeft = i957[1]
  return i956
}

Deserializers["GhostWriter"] = function (request, data, root) {
  var i958 = root || request.c( 'GhostWriter' )
  var i959 = data
  i958.timer = i959[0]
  var i961 = i959[1]
  var i960 = new (System.Collections.Generic.List$1(Bridge.ns('GhostWriter+Entry')))
  for(var i = 0; i < i961.length; i += 1) {
    i960.add(request.d('GhostWriter+Entry', i961[i + 0]));
  }
  i958.data = i960
  request.r(i959[2], i959[3], 0, i958, 'carUserControl')
  return i958
}

Deserializers["GhostWriter+Entry"] = function (request, data, root) {
  var i964 = root || request.c( 'GhostWriter+Entry' )
  var i965 = data
  i964.kind = i965[0]
  i964.time = i965[1]
  i964.distance = i965[2]
  i964.sideOffset = i965[3]
  i964.speed = i965[4]
  return i964
}

Deserializers["GhostReader"] = function (request, data, root) {
  var i966 = root || request.c( 'GhostReader' )
  var i967 = data
  request.r(i967[0], i967[1], 0, i966, 'ghost')
  request.r(i967[2], i967[3], 0, i966, 'pathCreator')
  i966.timer = i967[4]
  var i969 = i967[5]
  var i968 = new (System.Collections.Generic.List$1(Bridge.ns('GhostReader+Entry')))
  for(var i = 0; i < i969.length; i += 1) {
    i968.add(request.d('GhostReader+Entry', i969[i + 0]));
  }
  i966.data = i968
  return i966
}

Deserializers["GhostReader+Entry"] = function (request, data, root) {
  var i972 = root || request.c( 'GhostReader+Entry' )
  var i973 = data
  i972.kind = i973[0]
  i972.time = i973[1]
  i972.distance = i973[2]
  i972.sideOffset = i973[3]
  i972.speed = i973[4]
  return i972
}

Deserializers["UnityStandardAssets.Cameras.AutoCam"] = function (request, data, root) {
  var i974 = root || request.c( 'UnityStandardAssets.Cameras.AutoCam' )
  var i975 = data
  i974.m_MoveSpeed = i975[0]
  i974.m_TurnSpeed = i975[1]
  i974.m_RollSpeed = i975[2]
  i974.m_FollowVelocity = !!i975[3]
  i974.m_FollowTilt = !!i975[4]
  i974.m_SpinTurnLimit = i975[5]
  i974.m_TargetVelocityLowerLimit = i975[6]
  i974.m_SmoothTurnTime = i975[7]
  request.r(i975[8], i975[9], 0, i974, 'm_Target')
  i974.m_AutoTargetPlayer = !!i975[10]
  i974.m_UpdateType = i975[11]
  return i974
}

Deserializers["CameraFollower"] = function (request, data, root) {
  var i976 = root || request.c( 'CameraFollower' )
  var i977 = data
  request.r(i977[0], i977[1], 0, i976, 'Target')
  i976.PositionOffset = new pc.Vec3( i977[2], i977[3], i977[4] )
  i976.RotationOffset = new pc.Vec3( i977[5], i977[6], i977[7] )
  i976.CameraSpeed = i977[8]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i979 = data
  i978.enabled = !!i979[0]
  i978.type = i979[1]
  i978.color = new pc.Color(i979[2], i979[3], i979[4], i979[5])
  i978.cullingMask = i979[6]
  i978.intensity = i979[7]
  i978.range = i979[8]
  i978.spotAngle = i979[9]
  i978.shadows = i979[10]
  i978.shadowNormalBias = i979[11]
  i978.shadowBias = i979[12]
  i978.shadowStrength = i979[13]
  i978.lightmapBakeType = i979[14]
  i978.renderMode = i979[15]
  request.r(i979[16], i979[17], 0, i978, 'cookie')
  i978.cookieSize = i979[18]
  return i978
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i980 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i981 = data
  request.r(i981[0], i981[1], 0, i980, 'm_FirstSelected')
  i980.m_sendNavigationEvents = !!i981[2]
  i980.m_DragThreshold = i981[3]
  return i980
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i982 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i983 = data
  i982.m_HorizontalAxis = i983[0]
  i982.m_VerticalAxis = i983[1]
  i982.m_SubmitButton = i983[2]
  i982.m_CancelButton = i983[3]
  i982.m_InputActionsPerSecond = i983[4]
  i982.m_RepeatDelay = i983[5]
  i982.m_ForceModuleActive = !!i983[6]
  return i982
}

Deserializers["Countdown"] = function (request, data, root) {
  var i984 = root || request.c( 'Countdown' )
  var i985 = data
  request.r(i985[0], i985[1], 0, i984, 'CountdownText')
  request.r(i985[2], i985[3], 0, i984, 'Go_Image')
  request.r(i985[4], i985[5], 0, i984, 'Outline')
  request.r(i985[6], i985[7], 0, i984, 'MainWindow')
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i987 = data
  i986.m_Alpha = i987[0]
  i986.m_Interactable = !!i987[1]
  i986.m_BlocksRaycasts = !!i987[2]
  i986.m_IgnoreParentGroups = !!i987[3]
  i986.enabled = !!i987[4]
  return i986
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i988 = root || request.c( 'UnityEngine.UI.Outline' )
  var i989 = data
  i988.m_EffectColor = new pc.Color(i989[0], i989[1], i989[2], i989[3])
  i988.m_EffectDistance = new pc.Vec2( i989[4], i989[5] )
  i988.m_UseGraphicAlpha = !!i989[6]
  return i988
}

Deserializers["WinScreenWidget"] = function (request, data, root) {
  var i990 = root || request.c( 'WinScreenWidget' )
  var i991 = data
  request.r(i991[0], i991[1], 0, i990, 'RaceCar')
  request.r(i991[2], i991[3], 0, i990, 'WheatText')
  request.r(i991[4], i991[5], 0, i990, 'GemText')
  request.r(i991[6], i991[7], 0, i990, 'GameManager')
  request.r(i991[8], i991[9], 0, i990, 'products')
  return i990
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i992 = root || request.c( 'UnityEngine.UI.Button' )
  var i993 = data
  i992.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i993[0], i992.m_OnClick)
  i992.m_Navigation = request.d('UnityEngine.UI.Navigation', i993[1], i992.m_Navigation)
  i992.m_Transition = i993[2]
  i992.m_Colors = request.d('UnityEngine.UI.ColorBlock', i993[3], i992.m_Colors)
  i992.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i993[4], i992.m_SpriteState)
  i992.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i993[5], i992.m_AnimationTriggers)
  i992.m_Interactable = !!i993[6]
  request.r(i993[7], i993[8], 0, i992, 'm_TargetGraphic')
  return i992
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i994 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i995 = data
  i994.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i995[0], i994.m_PersistentCalls)
  return i994
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i996 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i997 = data
  i996.m_Mode = i997[0]
  request.r(i997[1], i997[2], 0, i996, 'm_SelectOnUp')
  request.r(i997[3], i997[4], 0, i996, 'm_SelectOnDown')
  request.r(i997[5], i997[6], 0, i996, 'm_SelectOnLeft')
  request.r(i997[7], i997[8], 0, i996, 'm_SelectOnRight')
  return i996
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i998 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i999 = data
  i998.m_NormalColor = new pc.Color(i999[0], i999[1], i999[2], i999[3])
  i998.m_HighlightedColor = new pc.Color(i999[4], i999[5], i999[6], i999[7])
  i998.m_PressedColor = new pc.Color(i999[8], i999[9], i999[10], i999[11])
  i998.m_SelectedColor = new pc.Color(i999[12], i999[13], i999[14], i999[15])
  i998.m_DisabledColor = new pc.Color(i999[16], i999[17], i999[18], i999[19])
  i998.m_ColorMultiplier = i999[20]
  i998.m_FadeDuration = i999[21]
  return i998
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1000 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1001 = data
  request.r(i1001[0], i1001[1], 0, i1000, 'm_HighlightedSprite')
  request.r(i1001[2], i1001[3], 0, i1000, 'm_PressedSprite')
  request.r(i1001[4], i1001[5], 0, i1000, 'm_SelectedSprite')
  request.r(i1001[6], i1001[7], 0, i1000, 'm_DisabledSprite')
  return i1000
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1002 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1003 = data
  i1002.m_NormalTrigger = i1003[0]
  i1002.m_HighlightedTrigger = i1003[1]
  i1002.m_PressedTrigger = i1003[2]
  i1002.m_SelectedTrigger = i1003[3]
  i1002.m_DisabledTrigger = i1003[4]
  return i1002
}

Deserializers["EndGameButton"] = function (request, data, root) {
  var i1004 = root || request.c( 'EndGameButton' )
  var i1005 = data
  request.r(i1005[0], i1005[1], 0, i1004, 'GameManager')
  return i1004
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1006 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1007 = data
  request.r(i1007[0], i1007[1], 0, i1006, 'm_ObjectArgument')
  i1006.m_ObjectArgumentAssemblyTypeName = i1007[2]
  i1006.m_IntArgument = i1007[3]
  i1006.m_FloatArgument = i1007[4]
  i1006.m_StringArgument = i1007[5]
  i1006.m_BoolArgument = !!i1007[6]
  return i1006
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i1008 = root || request.c( 'UnityEngine.UI.Slider' )
  var i1009 = data
  request.r(i1009[0], i1009[1], 0, i1008, 'm_FillRect')
  request.r(i1009[2], i1009[3], 0, i1008, 'm_HandleRect')
  i1008.m_Direction = i1009[4]
  i1008.m_MinValue = i1009[5]
  i1008.m_MaxValue = i1009[6]
  i1008.m_WholeNumbers = !!i1009[7]
  i1008.m_Value = i1009[8]
  i1008.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i1009[9], i1008.m_OnValueChanged)
  i1008.m_Navigation = request.d('UnityEngine.UI.Navigation', i1009[10], i1008.m_Navigation)
  i1008.m_Transition = i1009[11]
  i1008.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1009[12], i1008.m_Colors)
  i1008.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1009[13], i1008.m_SpriteState)
  i1008.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1009[14], i1008.m_AnimationTriggers)
  i1008.m_Interactable = !!i1009[15]
  request.r(i1009[16], i1009[17], 0, i1008, 'm_TargetGraphic')
  return i1008
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i1010 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i1011 = data
  i1010.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1011[0], i1010.m_PersistentCalls)
  return i1010
}

Deserializers["WheatSliderWidget"] = function (request, data, root) {
  var i1012 = root || request.c( 'WheatSliderWidget' )
  var i1013 = data
  request.r(i1013[0], i1013[1], 0, i1012, 'Slider')
  request.r(i1013[2], i1013[3], 0, i1012, 'gameManager')
  request.r(i1013[4], i1013[5], 0, i1012, 'BarIconImage')
  request.r(i1013[6], i1013[7], 0, i1012, 'WheatImage')
  i1012.MaxWheat = i1013[8]
  request.r(i1013[9], i1013[10], 0, i1012, 'products')
  return i1012
}

Deserializers["LongTapButton"] = function (request, data, root) {
  var i1014 = root || request.c( 'LongTapButton' )
  var i1015 = data
  i1014.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i1015[0], i1014.OnMouseDownEvent)
  i1014.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i1015[1], i1014.OnMouseUpEvent)
  return i1014
}

Deserializers["HealthBar"] = function (request, data, root) {
  var i1016 = root || request.c( 'HealthBar' )
  var i1017 = data
  request.r(i1017[0], i1017[1], 0, i1016, 'Slider')
  request.r(i1017[2], i1017[3], 0, i1016, 'HealthProvider')
  request.r(i1017[4], i1017[5], 0, i1016, 'BarIconImage')
  return i1016
}

Deserializers["ShootButtonCtrl"] = function (request, data, root) {
  var i1018 = root || request.c( 'ShootButtonCtrl' )
  var i1019 = data
  request.r(i1019[0], i1019[1], 0, i1018, 'txtPew')
  request.r(i1019[2], i1019[3], 0, i1018, 'txtNoAmmo')
  request.r(i1019[4], i1019[5], 0, i1018, 'products')
  return i1018
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i1020 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i1021 = data
  i1020.m_Spacing = i1021[0]
  i1020.m_ChildForceExpandWidth = !!i1021[1]
  i1020.m_ChildForceExpandHeight = !!i1021[2]
  i1020.m_ChildControlWidth = !!i1021[3]
  i1020.m_ChildControlHeight = !!i1021[4]
  i1020.m_ChildScaleWidth = !!i1021[5]
  i1020.m_ChildScaleHeight = !!i1021[6]
  i1020.m_Padding = UnityEngine.RectOffset.FromPaddings(i1021[7], i1021[8], i1021[9], i1021[10])
  i1020.m_ChildAlignment = i1021[11]
  return i1020
}

Deserializers["BoostsPanelCtrl"] = function (request, data, root) {
  var i1022 = root || request.c( 'BoostsPanelCtrl' )
  var i1023 = data
  request.r(i1023[0], i1023[1], 0, i1022, 'boosts')
  request.r(i1023[2], i1023[3], 0, i1022, 'wgtBoostPrefab')
  return i1022
}

Deserializers["RocketsPanelCtrl"] = function (request, data, root) {
  var i1024 = root || request.c( 'RocketsPanelCtrl' )
  var i1025 = data
  request.r(i1025[0], i1025[1], 0, i1024, 'products')
  request.r(i1025[2], i1025[3], 0, i1024, 'rocketPrefab')
  return i1024
}

Deserializers["ShieldBar"] = function (request, data, root) {
  var i1026 = root || request.c( 'ShieldBar' )
  var i1027 = data
  request.r(i1027[0], i1027[1], 0, i1026, 'slider')
  request.r(i1027[2], i1027[3], 0, i1026, 'healthController')
  request.r(i1027[4], i1027[5], 0, i1026, 'barIconImage')
  request.r(i1027[6], i1027[7], 0, i1026, 'allUI')
  return i1026
}

Deserializers["TimeSinceStartup"] = function (request, data, root) {
  var i1028 = root || request.c( 'TimeSinceStartup' )
  var i1029 = data
  request.r(i1029[0], i1029[1], 0, i1028, 'Text')
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1031 = data
  i1030.name = i1031[0]
  var i1033 = i1031[1]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1033[i + 0]) );
  }
  i1030.passes = i1032
  var i1035 = i1031[2]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1035[i + 0]) );
  }
  i1030.defaultParameterValues = i1034
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1038 = root || new pc.UnityShaderPass()
  var i1039 = data
  i1038.passType = i1039[0]
  i1038.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1039[1], i1038.zTest)
  i1038.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1039[2], i1038.zWrite)
  i1038.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1039[3], i1038.culling)
  i1038.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1039[4], i1038.blending)
  i1038.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1039[5], i1038.alphaBlending)
  i1038.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1039[6], i1038.colorWriteMask)
  i1038.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1039[7], i1038.offsetUnits)
  i1038.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1039[8], i1038.offsetFactor)
  i1038.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1039[9], i1038.stencilRef)
  i1038.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1039[10], i1038.stencilReadMask)
  i1038.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1039[11], i1038.stencilWriteMask)
  i1038.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1039[12], i1038.stencilOp)
  i1038.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1039[13], i1038.stencilOpFront)
  i1038.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1039[14], i1038.stencilOpBack)
  var i1041 = i1039[15]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1041[i + 0]) );
  }
  i1038.tags = i1040
  var i1043 = i1039[16]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1043[i + 0]) );
  }
  i1038.variants = i1042
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1045 = data
  i1044.val = i1045[0]
  i1044.name = i1045[1]
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1047 = data
  i1046.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1047[0], i1046.src)
  i1046.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1047[1], i1046.dst)
  i1046.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1047[2], i1046.op)
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1049 = data
  i1048.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1049[0], i1048.pass)
  i1048.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1049[1], i1048.fail)
  i1048.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1049[2], i1048.zFail)
  i1048.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1049[3], i1048.comp)
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1053 = data
  i1052.name = i1053[0]
  i1052.value = i1053[1]
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1057 = data
  var i1059 = i1057[0]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( i1059[i + 0] );
  }
  i1056.keywords = i1058
  i1056.vertexProgram = i1057[1]
  i1056.fragmentProgram = i1057[2]
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1065 = data
  i1064.name = i1065[0]
  i1064.type = i1065[1]
  i1064.value = new pc.Vec4( i1065[2], i1065[3], i1065[4], i1065[5] )
  i1064.textureValue = i1065[6]
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1067 = data
  i1066.name = i1067[0]
  request.r(i1067[1], i1067[2], 0, i1066, 'texture')
  i1066.aabb = i1067[3]
  i1066.vertices = i1067[4]
  i1066.triangles = i1067[5]
  i1066.textureRect = UnityEngine.Rect.MinMaxRect(i1067[6], i1067[7], i1067[8], i1067[9])
  i1066.packedRect = UnityEngine.Rect.MinMaxRect(i1067[10], i1067[11], i1067[12], i1067[13])
  i1066.border = new pc.Vec4( i1067[14], i1067[15], i1067[16], i1067[17] )
  i1066.transparency = i1067[18]
  i1066.bounds = i1067[19]
  i1066.pixelsPerUnit = i1067[20]
  i1066.textureWidth = i1067[21]
  i1066.textureHeight = i1067[22]
  i1066.nativeSize = new pc.Vec2( i1067[23], i1067[24] )
  i1066.pivot = new pc.Vec2( i1067[25], i1067[26] )
  i1066.textureRectOffset = new pc.Vec2( i1067[27], i1067[28] )
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1069 = data
  i1068.name = i1069[0]
  i1068.wrapMode = i1069[1]
  i1068.isLooping = !!i1069[2]
  i1068.length = i1069[3]
  var i1071 = i1069[4]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1071[i + 0]) );
  }
  i1068.curves = i1070
  var i1073 = i1069[5]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1073[i + 0]) );
  }
  i1068.events = i1072
  i1068.halfPrecision = !!i1069[6]
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1077 = data
  i1076.path = i1077[0]
  i1076.componentType = i1077[1]
  i1076.property = i1077[2]
  i1076.keys = i1077[3]
  var i1079 = i1077[4]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1079[i + 0]) );
  }
  i1076.objectReferenceKeys = i1078
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1083 = data
  i1082.time = i1083[0]
  request.r(i1083[1], i1083[2], 0, i1082, 'value')
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1087 = data
  i1086.functionName = i1087[0]
  i1086.floatParameter = i1087[1]
  i1086.intParameter = i1087[2]
  i1086.stringParameter = i1087[3]
  request.r(i1087[4], i1087[5], 0, i1086, 'objectReferenceParameter')
  i1086.time = i1087[6]
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1089 = data
  i1088.name = i1089[0]
  i1088.ascent = i1089[1]
  i1088.originalLineHeight = i1089[2]
  i1088.fontSize = i1089[3]
  var i1091 = i1089[4]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1091[i + 0]) );
  }
  i1088.characterInfo = i1090
  request.r(i1089[5], i1089[6], 0, i1088, 'texture')
  i1088.originalFontSize = i1089[7]
  return i1088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1095 = data
  i1094.index = i1095[0]
  i1094.advance = i1095[1]
  i1094.bearing = i1095[2]
  i1094.glyphWidth = i1095[3]
  i1094.glyphHeight = i1095[4]
  i1094.minX = i1095[5]
  i1094.maxX = i1095[6]
  i1094.minY = i1095[7]
  i1094.maxY = i1095[8]
  i1094.uvBottomLeftX = i1095[9]
  i1094.uvBottomLeftY = i1095[10]
  i1094.uvBottomRightX = i1095[11]
  i1094.uvBottomRightY = i1095[12]
  i1094.uvTopLeftX = i1095[13]
  i1094.uvTopLeftY = i1095[14]
  i1094.uvTopRightX = i1095[15]
  i1094.uvTopRightY = i1095[16]
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1097 = data
  i1096.name = i1097[0]
  var i1099 = i1097[1]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1099[i + 0]) );
  }
  i1096.states = i1098
  var i1101 = i1097[2]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1101[i + 0]) );
  }
  i1096.layers = i1100
  var i1103 = i1097[3]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1103[i + 0]) );
  }
  i1096.parameters = i1102
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1107 = data
  i1106.cycleOffset = i1107[0]
  i1106.cycleOffsetParameter = i1107[1]
  i1106.cycleOffsetParameterActive = !!i1107[2]
  i1106.mirror = !!i1107[3]
  i1106.mirrorParameter = i1107[4]
  i1106.mirrorParameterActive = !!i1107[5]
  i1106.motionId = i1107[6]
  i1106.nameHash = i1107[7]
  i1106.fullPathHash = i1107[8]
  i1106.speed = i1107[9]
  i1106.speedParameter = i1107[10]
  i1106.speedParameterActive = !!i1107[11]
  i1106.tag = i1107[12]
  i1106.name = i1107[13]
  i1106.writeDefaultValues = !!i1107[14]
  var i1109 = i1107[15]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1109[i + 0]) );
  }
  i1106.transitions = i1108
  var i1111 = i1107[16]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 2) {
  request.r(i1111[i + 0], i1111[i + 1], 2, i1110, '')
  }
  i1106.behaviours = i1110
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1115 = data
  i1114.fullPath = i1115[0]
  i1114.canTransitionToSelf = !!i1115[1]
  i1114.duration = i1115[2]
  i1114.exitTime = i1115[3]
  i1114.hasExitTime = !!i1115[4]
  i1114.hasFixedDuration = !!i1115[5]
  i1114.interruptionSource = i1115[6]
  i1114.offset = i1115[7]
  i1114.orderedInterruption = !!i1115[8]
  i1114.destinationStateNameHash = i1115[9]
  i1114.destinationStateMachineId = i1115[10]
  i1114.isExit = !!i1115[11]
  i1114.mute = !!i1115[12]
  i1114.solo = !!i1115[13]
  var i1117 = i1115[14]
  var i1116 = []
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1117[i + 0]) );
  }
  i1114.conditions = i1116
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1123 = data
  i1122.blendingMode = i1123[0]
  i1122.defaultWeight = i1123[1]
  i1122.name = i1123[2]
  i1122.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1123[3], i1122.stateMachine)
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1125 = data
  i1124.id = i1125[0]
  i1124.defaultStateNameHash = i1125[1]
  var i1127 = i1125[2]
  var i1126 = []
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1127[i + 0]) );
  }
  i1124.entryTransitions = i1126
  var i1129 = i1125[3]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1129[i + 0]) );
  }
  i1124.anyStateTransitions = i1128
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1133 = data
  i1132.destinationStateNameHash = i1133[0]
  i1132.destinationStateMachineId = i1133[1]
  i1132.isExit = !!i1133[2]
  i1132.mute = !!i1133[3]
  i1132.solo = !!i1133[4]
  var i1135 = i1133[5]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1135[i + 0]) );
  }
  i1132.conditions = i1134
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1139 = data
  i1138.defaultBool = !!i1139[0]
  i1138.defaultFloat = i1139[1]
  i1138.defaultInt = i1139[2]
  i1138.name = i1139[3]
  i1138.nameHash = i1139[4]
  i1138.type = i1139[5]
  return i1138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1141 = data
  i1140.name = i1141[0]
  i1140.bytes64 = i1141[1]
  i1140.data = i1141[2]
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1143 = data
  var i1145 = i1143[0]
  var i1144 = []
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1145[i + 0]) );
  }
  i1142.files = i1144
  i1142.componentToPrefabIds = i1143[1]
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1149 = data
  i1148.path = i1149[0]
  request.r(i1149[1], i1149[2], 0, i1148, 'unityObject')
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1151 = data
  var i1153 = i1151[0]
  var i1152 = []
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1153[i + 0]) );
  }
  i1150.scriptsExecutionOrder = i1152
  var i1155 = i1151[1]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1155[i + 0]) );
  }
  i1150.sortingLayers = i1154
  var i1157 = i1151[2]
  var i1156 = []
  for(var i = 0; i < i1157.length; i += 1) {
    i1156.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1157[i + 0]) );
  }
  i1150.cullingLayers = i1156
  i1150.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1151[3], i1150.timeSettings)
  i1150.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1151[4], i1150.physicsSettings)
  i1150.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1151[5], i1150.physics2DSettings)
  i1150.removeShadows = !!i1151[6]
  i1150.autoInstantiatePrefabs = !!i1151[7]
  i1150.enableAutoInstancing = !!i1151[8]
  i1150.lightmapEncodingQuality = i1151[9]
  i1150.desiredColorSpace = i1151[10]
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1161 = data
  i1160.name = i1161[0]
  i1160.value = i1161[1]
  return i1160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1165 = data
  i1164.id = i1165[0]
  i1164.name = i1165[1]
  i1164.value = i1165[2]
  return i1164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1169 = data
  i1168.id = i1169[0]
  i1168.name = i1169[1]
  return i1168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1171 = data
  i1170.fixedDeltaTime = i1171[0]
  i1170.maximumDeltaTime = i1171[1]
  i1170.timeScale = i1171[2]
  i1170.maximumParticleTimestep = i1171[3]
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1173 = data
  i1172.gravity = new pc.Vec3( i1173[0], i1173[1], i1173[2] )
  i1172.defaultSolverIterations = i1173[3]
  i1172.autoSyncTransforms = !!i1173[4]
  i1172.autoSimulation = !!i1173[5]
  var i1175 = i1173[6]
  var i1174 = []
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1175[i + 0]) );
  }
  i1172.collisionMatrix = i1174
  return i1172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1179 = data
  i1178.enabled = !!i1179[0]
  i1178.layerId = i1179[1]
  i1178.otherLayerId = i1179[2]
  return i1178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1181 = data
  request.r(i1181[0], i1181[1], 0, i1180, 'material')
  i1180.gravity = new pc.Vec2( i1181[2], i1181[3] )
  i1180.positionIterations = i1181[4]
  i1180.velocityIterations = i1181[5]
  i1180.velocityThreshold = i1181[6]
  i1180.maxLinearCorrection = i1181[7]
  i1180.maxAngularCorrection = i1181[8]
  i1180.maxTranslationSpeed = i1181[9]
  i1180.maxRotationSpeed = i1181[10]
  i1180.timeToSleep = i1181[11]
  i1180.linearSleepTolerance = i1181[12]
  i1180.angularSleepTolerance = i1181[13]
  i1180.defaultContactOffset = i1181[14]
  i1180.autoSimulation = !!i1181[15]
  i1180.queriesHitTriggers = !!i1181[16]
  i1180.queriesStartInColliders = !!i1181[17]
  i1180.callbacksOnDisable = !!i1181[18]
  i1180.reuseCollisionCallbacks = !!i1181[19]
  i1180.autoSyncTransforms = !!i1181[20]
  var i1183 = i1181[21]
  var i1182 = []
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1183[i + 0]) );
  }
  i1180.collisionMatrix = i1182
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1187 = data
  i1186.enabled = !!i1187[0]
  i1186.layerId = i1187[1]
  i1186.otherLayerId = i1187[2]
  return i1186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1191 = data
  i1190.weight = i1191[0]
  i1190.vertices = i1191[1]
  i1190.normals = i1191[2]
  i1190.tangents = i1191[3]
  return i1190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1195 = data
  i1194.mode = i1195[0]
  i1194.parameter = i1195[1]
  i1194.threshold = i1195[2]
  return i1194
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"customReflection":35,"defaultReflection":37,"defaultReflectionMode":39,"defaultReflectionResolution":40,"sunLightObjectId":41,"pixelLightCount":42,"defaultReflectionHDR":43,"hasLightDataAsset":44,"hasManualGenerate":45},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startDelayMultiplier":4,"startLifetime":5,"startLifetimeMultiplier":6,"startSpeed":7,"startSpeedMultiplier":8,"startSize3D":9,"startSize":10,"startSizeMultiplier":11,"startSizeX":12,"startSizeXMultiplier":13,"startSizeY":14,"startSizeYMultiplier":15,"startSizeZ":16,"startSizeZMultiplier":17,"startRotation3D":18,"startRotation":19,"startRotationMultiplier":20,"startRotationX":21,"startRotationXMultiplier":22,"startRotationY":23,"startRotationYMultiplier":24,"startRotationZ":25,"startRotationZMultiplier":26,"startColor":27,"gravityModifier":28,"gravityModifierMultiplier":29,"simulationSpace":30,"customSimulationSpace":31,"simulationSpeed":33,"useUnscaledTime":34,"scalingMode":35,"playOnAwake":36,"maxParticles":37,"emitterVelocityMode":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"m_Mode":0,"m_CurveMin":1,"m_CurveMax":2,"m_CurveMultiplier":3,"m_ConstantMin":4,"m_ConstantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"m_Mode":0,"m_GradientMin":1,"m_GradientMax":2,"m_ColorMin":3,"m_ColorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverTimeMultiplier":2,"rateOverDistance":3,"rateOverDistanceMultiplier":4,"bursts":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"xMultiplier":4,"yMultiplier":5,"zMultiplier":6,"separateAxes":7,"range":8},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"xMultiplier":4,"yMultiplier":5,"zMultiplier":6,"separateAxes":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusSpeedMultiplier":10,"radiusThickness":11,"angle":12,"length":13,"boxThickness":14,"meshShapeType":17,"mesh":18,"meshRenderer":20,"skinnedMeshRenderer":22,"useMeshMaterialIndex":24,"meshMaterialIndex":25,"useMeshColors":26,"normalOffset":27,"arc":28,"arcMode":29,"arcSpread":30,"arcSpeed":31,"arcSpeedMultiplier":32,"donutRadius":33,"position":34,"rotation":37,"scale":40},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"size":1,"sizeMultiplier":2,"x":3,"y":4,"z":5,"xMultiplier":6,"yMultiplier":7,"zMultiplier":8,"separateAxes":9,"range":10},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"size":1,"sizeMultiplier":2,"x":3,"y":4,"z":5,"xMultiplier":6,"yMultiplier":7,"zMultiplier":8,"separateAxes":9},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"frameOverTimeMultiplier":7,"startFrame":8,"startFrameMultiplier":9,"cycleCount":10,"rowIndex":11,"flipU":12,"flipV":13,"spriteCount":14},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"xMultiplier":4,"yMultiplier":5,"zMultiplier":6,"speedModifier":7,"speedModifierMultiplier":8,"space":9},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"strengthXMultiplier":5,"strengthYMultiplier":6,"strengthZMultiplier":7,"frequency":8,"damping":9,"octaveCount":10,"octaveMultiplier":11,"octaveScale":12,"quality":13,"scrollSpeed":14,"scrollSpeedMultiplier":15,"remapEnabled":16,"remapX":17,"remapY":18,"remapZ":19,"remapXMultiplier":20,"remapYMultiplier":21,"remapZMultiplier":22,"positionAmount":23,"rotationAmount":24,"sizeAmount":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2,"curveMultiplier":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"xMultiplier":4,"yMultiplier":5,"zMultiplier":6,"space":7,"randomized":8},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"limitMultiplier":5,"limitXMultiplier":6,"limitYMultiplier":7,"limitZMultiplier":8,"dampen":9,"separateAxes":10,"space":11,"drag":12,"dragMultiplier":13,"multiplyDragByParticleSize":14,"multiplyDragByParticleVelocity":15},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"playOnAwake":2,"loop":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"name":0,"passes":1,"defaultParameterValues":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"passType":0,"zTest":1,"zWrite":2,"culling":3,"blending":4,"alphaBlending":5,"colorWriteMask":6,"offsetUnits":7,"offsetFactor":8,"stencilRef":9,"stencilReadMask":10,"stencilWriteMask":11,"stencilOp":12,"stencilOpFront":13,"stencilOpBack":14,"tags":15,"variants":16},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"keywords":0,"vertexProgram":1,"fragmentProgram":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"removeShadows":6,"autoInstantiatePrefabs":7,"enableAutoInstancing":8,"lightmapEncodingQuality":9,"desiredColorSpace":10},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"autoSyncTransforms":4,"autoSimulation":5,"collisionMatrix":6},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"88":[89],"90":[89],"91":[89],"92":[89],"93":[89],"94":[89],"95":[52],"96":[16],"97":[36],"98":[36],"99":[36],"100":[36],"101":[36],"102":[36],"103":[36],"104":[105],"106":[105],"107":[105],"108":[105],"109":[105],"110":[105],"111":[105],"112":[105],"113":[105],"114":[105],"115":[105],"116":[105],"117":[105],"118":[16],"119":[27],"120":[121],"122":[121],"2":[1],"29":[31],"123":[1],"79":[78],"40":[37],"39":[48],"41":[37],"124":[125],"126":[1],"127":[8,1],"5":[2],"9":[8,1],"128":[1],"4":[2],"129":[1],"130":[1],"83":[1],"131":[1],"35":[1],"132":[1],"133":[1],"134":[1],"135":[8,1],"136":[8,1],"137":[1],"138":[1],"139":[1],"80":[1],"11":[8,1],"140":[1],"141":[74],"142":[74],"75":[74],"143":[74],"144":[16],"145":[16],"146":[1],"147":[8,1],"148":[27],"149":[8,1],"150":[8,1],"151":[27,8,1],"152":[1,8],"153":[1]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","ScenePreloader","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Material","UnityEngine.Cubemap","UnityEngine.SphereCollider","UnselectedColliderDrawer","WheatPieceDestroyer","WheatPieceRandomizer","DisableIfTooFar","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Texture2D","DamagingObstacle","UnityEngine.ParticleSystemRenderer","UnityEngine.ParticleSystem","LootableItem","LightPole","UIActiveBoost","UnityEngine.UI.LayoutElement","UnityEngine.Rigidbody","CarController","UnityEngine.GameObject","WheelEffects","CarUserControl","UnityStandardAssets.Vehicles.Car.CarAudio","UnityEngine.BoxCollider","RaceCar","HealthController","Gun","JustWheelMeshes","BlobShadowMovement","UnityEngine.AudioSource","Rocket","Explosion","DriverDescription","UnityEngine.SkinnedMeshRenderer","TrackHandles","PathCreation.PathCreator","UnityEngine.MeshCollider","FinishTrigger","GameManager","Countdown","UnityEngine.CanvasGroup","LongTapButton","HealthBar","TrackContentGenerator","WheatGenerator","GhostReader","LunaUIFields","Products","UnityEngine.TextAsset","Boosts","GhostWriter","UnityStandardAssets.Cameras.AutoCam","CameraFollower","UnityEngine.LightProbeGroup","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.UI.Outline","WinScreenWidget","UnityEngine.UI.Button","EndGameButton","UnityEngine.UI.Slider","WheatSliderWidget","ShootButtonCtrl","UnityEngine.UI.HorizontalLayoutGroup","BoostsPanelCtrl","RocketsPanelCtrl","ShieldBar","TimeSinceStartup","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","ButtonInput","SWS.PathRenderer","UnityEngine.LineRenderer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TextContainer"]

Deserializers.unityVersion = "2019.4.16f1";

Deserializers.applicationIdentifier = "com.DefaultCompany.TribezRacingPlayable";

Deserializers.disableAntiAliasing = true;

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

