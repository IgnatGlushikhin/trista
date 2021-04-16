var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i588 = root || request.c( 'UnityEngine.JointSpring' )
  var i589 = data
  i588.spring = i589[0]
  i588.damper = i589[1]
  i588.targetPosition = i589[2]
  return i588
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i590 = root || request.c( 'UnityEngine.JointMotor' )
  var i591 = data
  i590.m_TargetVelocity = i591[0]
  i590.m_Force = i591[1]
  i590.m_FreeSpin = i591[2]
  return i590
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i592 = root || request.c( 'UnityEngine.JointLimits' )
  var i593 = data
  i592.m_Min = i593[0]
  i592.m_Max = i593[1]
  i592.m_Bounciness = i593[2]
  i592.m_BounceMinVelocity = i593[3]
  i592.m_ContactDistance = i593[4]
  i592.minBounce = i593[5]
  i592.maxBounce = i593[6]
  return i592
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i594 = root || request.c( 'UnityEngine.JointDrive' )
  var i595 = data
  i594.m_PositionSpring = i595[0]
  i594.m_PositionDamper = i595[1]
  i594.m_MaximumForce = i595[2]
  return i594
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i596 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i597 = data
  i596.m_Spring = i597[0]
  i596.m_Damper = i597[1]
  return i596
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i598 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i599 = data
  i598.m_Limit = i599[0]
  i598.m_Bounciness = i599[1]
  i598.m_ContactDistance = i599[2]
  return i598
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i601 = data
  i600.m_ExtremumSlip = i601[0]
  i600.m_ExtremumValue = i601[1]
  i600.m_AsymptoteSlip = i601[2]
  i600.m_AsymptoteValue = i601[3]
  i600.m_Stiffness = i601[4]
  return i600
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i603 = data
  i602.m_LowerAngle = i603[0]
  i602.m_UpperAngle = i603[1]
  return i602
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i605 = data
  i604.m_MotorSpeed = i605[0]
  i604.m_MaximumMotorTorque = i605[1]
  return i604
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i607 = data
  i606.m_DampingRatio = i607[0]
  i606.m_Frequency = i607[1]
  i606.m_Angle = i607[2]
  return i606
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i609 = data
  i608.m_LowerTranslation = i609[0]
  i608.m_UpperTranslation = i609[1]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i610 = root || new pc.UnityMaterial()
  var i611 = data
  i610.name = i611[0]
  request.r(i611[1], i611[2], 0, i610, 'shader')
  i610.renderQueue = i611[3]
  i610.enableInstancing = !!i611[4]
  var i613 = i611[5]
  var i612 = []
  for(var i = 0; i < i613.length; i += 1) {
    i612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i613[i + 0]) );
  }
  i610.floatParameters = i612
  var i615 = i611[6]
  var i614 = []
  for(var i = 0; i < i615.length; i += 1) {
    i614.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i615[i + 0]) );
  }
  i610.colorParameters = i614
  var i617 = i611[7]
  var i616 = []
  for(var i = 0; i < i617.length; i += 1) {
    i616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i617[i + 0]) );
  }
  i610.vectorParameters = i616
  var i619 = i611[8]
  var i618 = []
  for(var i = 0; i < i619.length; i += 1) {
    i618.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i619[i + 0]) );
  }
  i610.textureParameters = i618
  var i621 = i611[9]
  var i620 = []
  for(var i = 0; i < i621.length; i += 1) {
    i620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i621[i + 0]) );
  }
  i610.materialFlags = i620
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i625 = data
  i624.name = i625[0]
  i624.value = i625[1]
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i629 = data
  i628.name = i629[0]
  i628.value = new pc.Color(i629[1], i629[2], i629[3], i629[4])
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i633 = data
  i632.name = i633[0]
  i632.value = new pc.Vec4( i633[1], i633[2], i633[3], i633[4] )
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i637 = data
  i636.name = i637[0]
  request.r(i637[1], i637[2], 0, i636, 'value')
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i641 = data
  i640.name = i641[0]
  i640.enabled = !!i641[1]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i643 = data
  i642.position = new pc.Vec3( i643[0], i643[1], i643[2] )
  i642.scale = new pc.Vec3( i643[3], i643[4], i643[5] )
  i642.rotation = new pc.Quat(i643[6], i643[7], i643[8], i643[9])
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i645 = data
  i644.center = new pc.Vec3( i645[0], i645[1], i645[2] )
  i644.size = new pc.Vec3( i645[3], i645[4], i645[5] )
  i644.enabled = !!i645[6]
  i644.isTrigger = !!i645[7]
  request.r(i645[8], i645[9], 0, i644, 'material')
  return i644
}

Deserializers["WheatPieceRandomizer"] = function (request, data, root) {
  var i646 = root || request.c( 'WheatPieceRandomizer' )
  var i647 = data
  return i646
}

Deserializers["WheatPieceDestroyer"] = function (request, data, root) {
  var i648 = root || request.c( 'WheatPieceDestroyer' )
  var i649 = data
  return i648
}

Deserializers["WheatOptimizer"] = function (request, data, root) {
  var i650 = root || request.c( 'WheatOptimizer' )
  var i651 = data
  request.r(i651[0], i651[1], 0, i650, 'detailedViewPrefab')
  request.r(i651[2], i651[3], 0, i650, 'spriteViewPrefab')
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i653 = data
  i652.name = i653[0]
  i652.tag = i653[1]
  i652.enabled = !!i653[2]
  i652.isStatic = !!i653[3]
  i652.layer = i653[4]
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i655 = data
  request.r(i655[0], i655[1], 0, i654, 'sharedMesh')
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i657 = data
  request.r(i657[0], i657[1], 0, i656, 'additionalVertexStreams')
  i656.enabled = !!i657[2]
  request.r(i657[3], i657[4], 0, i656, 'sharedMaterial')
  var i659 = i657[5]
  var i658 = []
  for(var i = 0; i < i659.length; i += 2) {
  request.r(i659[i + 0], i659[i + 1], 2, i658, '')
  }
  i656.sharedMaterials = i658
  i656.receiveShadows = !!i657[6]
  i656.shadowCastingMode = i657[7]
  i656.sortingLayerID = i657[8]
  i656.sortingOrder = i657[9]
  i656.lightmapIndex = i657[10]
  i656.lightmapSceneIndex = i657[11]
  i656.lightmapScaleOffset = new pc.Vec4( i657[12], i657[13], i657[14], i657[15] )
  i656.lightProbeUsage = i657[16]
  i656.reflectionProbeUsage = i657[17]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i663 = data
  i662.name = i663[0]
  i662.halfPrecision = !!i663[1]
  i662.vertexCount = i663[2]
  i662.aabb = i663[3]
  var i665 = i663[4]
  var i664 = []
  for(var i = 0; i < i665.length; i += 1) {
    i664.push( !!i665[i + 0] );
  }
  i662.streams = i664
  i662.vertices = i663[5]
  var i667 = i663[6]
  var i666 = []
  for(var i = 0; i < i667.length; i += 1) {
    i666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i667[i + 0]) );
  }
  i662.subMeshes = i666
  var i669 = i663[7]
  var i668 = []
  for(var i = 0; i < i669.length; i += 16) {
    i668.push( new pc.Mat4().setData(i669[i + 0], i669[i + 1], i669[i + 2], i669[i + 3],  i669[i + 4], i669[i + 5], i669[i + 6], i669[i + 7],  i669[i + 8], i669[i + 9], i669[i + 10], i669[i + 11],  i669[i + 12], i669[i + 13], i669[i + 14], i669[i + 15]) );
  }
  i662.bindposes = i668
  var i671 = i663[8]
  var i670 = []
  for(var i = 0; i < i671.length; i += 1) {
    i670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i671[i + 0]) );
  }
  i662.blendShapes = i670
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i677 = data
  i676.triangles = i677[0]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i683 = data
  i682.name = i683[0]
  var i685 = i683[1]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i685[i + 0]) );
  }
  i682.frames = i684
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i687 = data
  i686.name = i687[0]
  i686.width = i687[1]
  i686.height = i687[2]
  i686.mipmapCount = i687[3]
  i686.anisoLevel = i687[4]
  i686.filterMode = i687[5]
  i686.hdr = !!i687[6]
  i686.format = i687[7]
  i686.wrapMode = i687[8]
  i686.alphaIsTransparency = !!i687[9]
  i686.alphaSource = i687[10]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i689 = data
  i688.enabled = !!i689[0]
  i688.isTrigger = !!i689[1]
  request.r(i689[2], i689[3], 0, i688, 'material')
  request.r(i689[4], i689[5], 0, i688, 'sharedMesh')
  i688.convex = !!i689[6]
  return i688
}

Deserializers["DamagingObstacle"] = function (request, data, root) {
  var i690 = root || request.c( 'DamagingObstacle' )
  var i691 = data
  request.r(i691[0], i691[1], 0, i690, 'parts')
  i690.m_damage = i691[2]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i693 = data
  i692.enabled = !!i693[0]
  request.r(i693[1], i693[2], 0, i692, 'sharedMaterial')
  var i695 = i693[3]
  var i694 = []
  for(var i = 0; i < i695.length; i += 2) {
  request.r(i695[i + 0], i695[i + 1], 2, i694, '')
  }
  i692.sharedMaterials = i694
  i692.receiveShadows = !!i693[4]
  i692.shadowCastingMode = i693[5]
  i692.sortingLayerID = i693[6]
  i692.sortingOrder = i693[7]
  i692.lightmapIndex = i693[8]
  i692.lightmapSceneIndex = i693[9]
  i692.lightmapScaleOffset = new pc.Vec4( i693[10], i693[11], i693[12], i693[13] )
  i692.lightProbeUsage = i693[14]
  i692.reflectionProbeUsage = i693[15]
  request.r(i693[16], i693[17], 0, i692, 'mesh')
  i692.meshCount = i693[18]
  i692.activeVertexStreamsCount = i693[19]
  i692.alignment = i693[20]
  i692.renderMode = i693[21]
  i692.sortMode = i693[22]
  i692.lengthScale = i693[23]
  i692.velocityScale = i693[24]
  i692.cameraVelocityScale = i693[25]
  i692.normalDirection = i693[26]
  i692.sortingFudge = i693[27]
  i692.minParticleSize = i693[28]
  i692.maxParticleSize = i693[29]
  i692.pivot = new pc.Vec3( i693[30], i693[31], i693[32] )
  request.r(i693[33], i693[34], 0, i692, 'trailMaterial')
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i697 = data
  i696.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i697[0], i696.main)
  i696.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i697[1], i696.colorBySpeed)
  i696.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i697[2], i696.colorOverLifetime)
  i696.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i697[3], i696.emission)
  i696.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i697[4], i696.rotationBySpeed)
  i696.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i697[5], i696.rotationOverLifetime)
  i696.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i697[6], i696.shape)
  i696.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i697[7], i696.sizeBySpeed)
  i696.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i697[8], i696.sizeOverLifetime)
  i696.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i697[9], i696.textureSheetAnimation)
  i696.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i697[10], i696.velocityOverLifetime)
  i696.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i697[11], i696.noise)
  i696.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i697[12], i696.inheritVelocity)
  i696.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i697[13], i696.forceOverLifetime)
  i696.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i697[14], i696.limitVelocityOverLifetime)
  i696.useAutoRandomSeed = !!i697[15]
  i696.randomSeed = i697[16]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i698 = root || new pc.ParticleSystemMain()
  var i699 = data
  i698.duration = i699[0]
  i698.loop = !!i699[1]
  i698.prewarm = !!i699[2]
  i698.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[3], i698.startDelay)
  i698.startDelayMultiplier = i699[4]
  i698.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[5], i698.startLifetime)
  i698.startLifetimeMultiplier = i699[6]
  i698.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[7], i698.startSpeed)
  i698.startSpeedMultiplier = i699[8]
  i698.startSize3D = !!i699[9]
  i698.startSize = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[10], i698.startSize)
  i698.startSizeMultiplier = i699[11]
  i698.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[12], i698.startSizeX)
  i698.startSizeXMultiplier = i699[13]
  i698.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[14], i698.startSizeY)
  i698.startSizeYMultiplier = i699[15]
  i698.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[16], i698.startSizeZ)
  i698.startSizeZMultiplier = i699[17]
  i698.startRotation3D = !!i699[18]
  i698.startRotation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[19], i698.startRotation)
  i698.startRotationMultiplier = i699[20]
  i698.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[21], i698.startRotationX)
  i698.startRotationXMultiplier = i699[22]
  i698.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[23], i698.startRotationY)
  i698.startRotationYMultiplier = i699[24]
  i698.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[25], i698.startRotationZ)
  i698.startRotationZMultiplier = i699[26]
  i698.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i699[27], i698.startColor)
  i698.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[28], i698.gravityModifier)
  i698.gravityModifierMultiplier = i699[29]
  i698.simulationSpace = i699[30]
  request.r(i699[31], i699[32], 0, i698, 'customSimulationSpace')
  i698.simulationSpeed = i699[33]
  i698.useUnscaledTime = !!i699[34]
  i698.scalingMode = i699[35]
  i698.playOnAwake = !!i699[36]
  i698.maxParticles = i699[37]
  i698.emitterVelocityMode = i699[38]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i700 = root || new pc.MinMaxCurve()
  var i701 = data
  i700.m_Mode = i701[0]
  i700.m_CurveMin = new pc.AnimationCurve( { keys_flow: i701[1] } )
  i700.m_CurveMax = new pc.AnimationCurve( { keys_flow: i701[2] } )
  i700.m_CurveMultiplier = i701[3]
  i700.m_ConstantMin = i701[4]
  i700.m_ConstantMax = i701[5]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i702 = root || new pc.MinMaxGradient()
  var i703 = data
  i702.m_Mode = i703[0]
  i702.m_GradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i703[1], i702.m_GradientMin)
  i702.m_GradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i703[2], i702.m_GradientMax)
  i702.m_ColorMin = new pc.Color(i703[3], i703[4], i703[5], i703[6])
  i702.m_ColorMax = new pc.Color(i703[7], i703[8], i703[9], i703[10])
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i705 = data
  i704.mode = i705[0]
  var i707 = i705[1]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i707[i + 0]) );
  }
  i704.colorKeys = i706
  var i709 = i705[2]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i709[i + 0]) );
  }
  i704.alphaKeys = i708
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i710 = root || new pc.ParticleSystemColorBySpeed()
  var i711 = data
  i710.enabled = !!i711[0]
  i710.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i711[1], i710.color)
  i710.range = new pc.Vec2( i711[2], i711[3] )
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i715 = data
  i714.color = new pc.Color(i715[0], i715[1], i715[2], i715[3])
  i714.time = i715[4]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i719 = data
  i718.alpha = i719[0]
  i718.time = i719[1]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i720 = root || new pc.ParticleSystemColorOverLifetime()
  var i721 = data
  i720.enabled = !!i721[0]
  i720.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i721[1], i720.color)
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i722 = root || new pc.ParticleSystemEmitter()
  var i723 = data
  i722.enabled = !!i723[0]
  i722.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i723[1], i722.rateOverTime)
  i722.rateOverTimeMultiplier = i723[2]
  i722.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i723[3], i722.rateOverDistance)
  i722.rateOverDistanceMultiplier = i723[4]
  var i725 = i723[5]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i725[i + 0]) );
  }
  i722.bursts = i724
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i728 = root || new pc.ParticleSystemBurst()
  var i729 = data
  i728.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i729[0], i728.count)
  i728.cycleCount = i729[1]
  i728.minCount = i729[2]
  i728.maxCount = i729[3]
  i728.repeatInterval = i729[4]
  i728.time = i729[5]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i730 = root || new pc.ParticleSystemRotationBySpeed()
  var i731 = data
  i730.enabled = !!i731[0]
  i730.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i731[1], i730.x)
  i730.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i731[2], i730.y)
  i730.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i731[3], i730.z)
  i730.xMultiplier = i731[4]
  i730.yMultiplier = i731[5]
  i730.zMultiplier = i731[6]
  i730.separateAxes = !!i731[7]
  i730.range = new pc.Vec2( i731[8], i731[9] )
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i732 = root || new pc.ParticleSystemRotationOverLifetime()
  var i733 = data
  i732.enabled = !!i733[0]
  i732.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i733[1], i732.x)
  i732.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i733[2], i732.y)
  i732.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i733[3], i732.z)
  i732.xMultiplier = i733[4]
  i732.yMultiplier = i733[5]
  i732.zMultiplier = i733[6]
  i732.separateAxes = !!i733[7]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i734 = root || new pc.ParticleSystemShape()
  var i735 = data
  i734.enabled = !!i735[0]
  i734.shapeType = i735[1]
  i734.randomDirectionAmount = i735[2]
  i734.sphericalDirectionAmount = i735[3]
  i734.randomPositionAmount = i735[4]
  i734.alignToDirection = !!i735[5]
  i734.radius = i735[6]
  i734.radiusMode = i735[7]
  i734.radiusSpread = i735[8]
  i734.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[9], i734.radiusSpeed)
  i734.radiusSpeedMultiplier = i735[10]
  i734.radiusThickness = i735[11]
  i734.angle = i735[12]
  i734.length = i735[13]
  i734.boxThickness = new pc.Vec3( i735[14], i735[15], i735[16] )
  i734.meshShapeType = i735[17]
  request.r(i735[18], i735[19], 0, i734, 'mesh')
  request.r(i735[20], i735[21], 0, i734, 'meshRenderer')
  request.r(i735[22], i735[23], 0, i734, 'skinnedMeshRenderer')
  i734.useMeshMaterialIndex = !!i735[24]
  i734.meshMaterialIndex = i735[25]
  i734.useMeshColors = !!i735[26]
  i734.normalOffset = i735[27]
  i734.arc = i735[28]
  i734.arcMode = i735[29]
  i734.arcSpread = i735[30]
  i734.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[31], i734.arcSpeed)
  i734.arcSpeedMultiplier = i735[32]
  i734.donutRadius = i735[33]
  i734.position = new pc.Vec3( i735[34], i735[35], i735[36] )
  i734.rotation = new pc.Vec3( i735[37], i735[38], i735[39] )
  i734.scale = new pc.Vec3( i735[40], i735[41], i735[42] )
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i736 = root || new pc.ParticleSystemSizeBySpeed()
  var i737 = data
  i736.enabled = !!i737[0]
  i736.size = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i737[1], i736.size)
  i736.sizeMultiplier = i737[2]
  i736.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i737[3], i736.x)
  i736.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i737[4], i736.y)
  i736.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i737[5], i736.z)
  i736.xMultiplier = i737[6]
  i736.yMultiplier = i737[7]
  i736.zMultiplier = i737[8]
  i736.separateAxes = !!i737[9]
  i736.range = new pc.Vec2( i737[10], i737[11] )
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i738 = root || new pc.ParticleSystemSizeOverLifetime()
  var i739 = data
  i738.enabled = !!i739[0]
  i738.size = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[1], i738.size)
  i738.sizeMultiplier = i739[2]
  i738.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[3], i738.x)
  i738.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[4], i738.y)
  i738.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[5], i738.z)
  i738.xMultiplier = i739[6]
  i738.yMultiplier = i739[7]
  i738.zMultiplier = i739[8]
  i738.separateAxes = !!i739[9]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i740 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i741 = data
  i740.enabled = !!i741[0]
  i740.mode = i741[1]
  i740.animation = i741[2]
  i740.numTilesX = i741[3]
  i740.numTilesY = i741[4]
  i740.useRandomRow = !!i741[5]
  i740.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[6], i740.frameOverTime)
  i740.frameOverTimeMultiplier = i741[7]
  i740.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[8], i740.startFrame)
  i740.startFrameMultiplier = i741[9]
  i740.cycleCount = i741[10]
  i740.rowIndex = i741[11]
  i740.flipU = i741[12]
  i740.flipV = i741[13]
  i740.spriteCount = i741[14]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i742 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i743 = data
  i742.enabled = !!i743[0]
  i742.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[1], i742.x)
  i742.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[2], i742.y)
  i742.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[3], i742.z)
  i742.xMultiplier = i743[4]
  i742.yMultiplier = i743[5]
  i742.zMultiplier = i743[6]
  i742.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[7], i742.speedModifier)
  i742.speedModifierMultiplier = i743[8]
  i742.space = i743[9]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i744 = root || new pc.ParticleSystemNoise()
  var i745 = data
  i744.enabled = !!i745[0]
  i744.separateAxes = !!i745[1]
  i744.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[2], i744.strengthX)
  i744.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[3], i744.strengthY)
  i744.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[4], i744.strengthZ)
  i744.strengthXMultiplier = i745[5]
  i744.strengthYMultiplier = i745[6]
  i744.strengthZMultiplier = i745[7]
  i744.frequency = i745[8]
  i744.damping = !!i745[9]
  i744.octaveCount = i745[10]
  i744.octaveMultiplier = i745[11]
  i744.octaveScale = i745[12]
  i744.quality = i745[13]
  i744.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[14], i744.scrollSpeed)
  i744.scrollSpeedMultiplier = i745[15]
  i744.remapEnabled = !!i745[16]
  i744.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[17], i744.remapX)
  i744.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[18], i744.remapY)
  i744.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[19], i744.remapZ)
  i744.remapXMultiplier = i745[20]
  i744.remapYMultiplier = i745[21]
  i744.remapZMultiplier = i745[22]
  i744.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[23], i744.positionAmount)
  i744.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[24], i744.rotationAmount)
  i744.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[25], i744.sizeAmount)
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i746 = root || new pc.ParticleSystemInheritVelocity()
  var i747 = data
  i746.enabled = !!i747[0]
  i746.mode = i747[1]
  i746.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[2], i746.curve)
  i746.curveMultiplier = i747[3]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i748 = root || new pc.ParticleSystemForceOverLifetime()
  var i749 = data
  i748.enabled = !!i749[0]
  i748.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[1], i748.x)
  i748.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[2], i748.y)
  i748.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[3], i748.z)
  i748.xMultiplier = i749[4]
  i748.yMultiplier = i749[5]
  i748.zMultiplier = i749[6]
  i748.space = i749[7]
  i748.randomized = !!i749[8]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i750 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i751 = data
  i750.enabled = !!i751[0]
  i750.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[1], i750.limit)
  i750.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[2], i750.limitX)
  i750.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[3], i750.limitY)
  i750.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[4], i750.limitZ)
  i750.limitMultiplier = i751[5]
  i750.limitXMultiplier = i751[6]
  i750.limitYMultiplier = i751[7]
  i750.limitZMultiplier = i751[8]
  i750.dampen = i751[9]
  i750.separateAxes = !!i751[10]
  i750.space = i751[11]
  i750.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[12], i750.drag)
  i750.dragMultiplier = i751[13]
  i750.multiplyDragByParticleSize = !!i751[14]
  i750.multiplyDragByParticleVelocity = !!i751[15]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i753 = data
  i752.enabled = !!i753[0]
  i752.isTrigger = !!i753[1]
  request.r(i753[2], i753[3], 0, i752, 'material')
  i752.center = new pc.Vec3( i753[4], i753[5], i753[6] )
  i752.radius = i753[7]
  return i752
}

Deserializers["LootableItem"] = function (request, data, root) {
  var i754 = root || request.c( 'LootableItem' )
  var i755 = data
  i754.OnLootableItemCollected = request.d('LootableItemEvent', i755[0], i754.OnLootableItemCollected)
  request.r(i755[1], i755[2], 0, i754, 'item')
  i754.kind = i755[3]
  return i754
}

Deserializers["LootableItemEvent"] = function (request, data, root) {
  var i756 = root || request.c( 'LootableItemEvent' )
  var i757 = data
  i756.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i757[0], i756.m_PersistentCalls)
  return i756
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i759 = data
  var i761 = i759[0]
  var i760 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i761.length; i += 1) {
    i760.add(request.d('UnityEngine.Events.PersistentCall', i761[i + 0]));
  }
  i758.m_Calls = i760
  return i758
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i765 = data
  request.r(i765[0], i765[1], 0, i764, 'm_Target')
  i764.m_MethodName = i765[2]
  i764.m_Mode = i765[3]
  i764.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i765[4], i764.m_Arguments)
  i764.m_CallState = i765[5]
  return i764
}

Deserializers["UnselectedColliderDrawer"] = function (request, data, root) {
  var i766 = root || request.c( 'UnselectedColliderDrawer' )
  var i767 = data
  return i766
}

Deserializers["LightPole"] = function (request, data, root) {
  var i768 = root || request.c( 'LightPole' )
  var i769 = data
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i771 = data
  i770.mass = i771[0]
  i770.drag = i771[1]
  i770.angularDrag = i771[2]
  i770.useGravity = !!i771[3]
  i770.isKinematic = !!i771[4]
  i770.constraints = i771[5]
  i770.maxAngularVelocity = i771[6]
  i770.collisionDetectionMode = i771[7]
  i770.interpolation = i771[8]
  return i770
}

Deserializers["CarController"] = function (request, data, root) {
  var i772 = root || request.c( 'CarController' )
  var i773 = data
  var i775 = i773[0]
  var i774 = []
  for(var i = 0; i < i775.length; i += 2) {
  request.r(i775[i + 0], i775[i + 1], 2, i774, '')
  }
  i772.m_WheelColliders = i774
  i772.TorqueMultiplier = i773[1]
  i772.m_CarDriveType = i773[2]
  var i777 = i773[3]
  var i776 = []
  for(var i = 0; i < i777.length; i += 2) {
  request.r(i777[i + 0], i777[i + 1], 2, i776, '')
  }
  i772.m_WheelMeshes = i776
  var i779 = i773[4]
  var i778 = []
  for(var i = 0; i < i779.length; i += 2) {
  request.r(i779[i + 0], i779[i + 1], 2, i778, '')
  }
  i772.m_WheelEffects = i778
  i772.m_CentreOfMassOffset = new pc.Vec3( i773[5], i773[6], i773[7] )
  i772.m_MaximumSteerAngle = i773[8]
  i772.m_SteerHelper = i773[9]
  i772.m_TractionControl = i773[10]
  i772.m_FullTorqueOverAllWheels = i773[11]
  i772.m_ReverseTorque = i773[12]
  i772.m_MaxHandbrakeTorque = i773[13]
  i772.m_Downforce = i773[14]
  i772.m_SpeedType = i773[15]
  i772.m_Topspeed = i773[16]
  i772.m_RevRangeBoundary = i773[17]
  i772.m_SlipLimit = i773[18]
  i772.m_BrakeTorque = i773[19]
  i772.m_GearNum = i773[20]
  request.r(i773[21], i773[22], 0, i772, 'm_Rigidbody')
  return i772
}

Deserializers["CarUserControl"] = function (request, data, root) {
  var i786 = root || request.c( 'CarUserControl' )
  var i787 = data
  i786.CanMove = !!i787[0]
  request.r(i787[1], i787[2], 0, i786, 'pathCreator')
  request.r(i787[3], i787[4], 0, i786, 'playerCarrot')
  request.r(i787[5], i787[6], 0, i786, 'ghostWriter')
  request.r(i787[7], i787[8], 0, i786, 'carBody')
  request.r(i787[9], i787[10], 0, i786, 'collisionParticlesLeft')
  request.r(i787[11], i787[12], 0, i786, 'collisionParticlesRight')
  return i786
}

Deserializers["UnityStandardAssets.Vehicles.Car.CarAudio"] = function (request, data, root) {
  var i788 = root || request.c( 'UnityStandardAssets.Vehicles.Car.CarAudio' )
  var i789 = data
  i788.engineSoundStyle = i789[0]
  request.r(i789[1], i789[2], 0, i788, 'lowAccelClip')
  request.r(i789[3], i789[4], 0, i788, 'lowDecelClip')
  request.r(i789[5], i789[6], 0, i788, 'highAccelClip')
  request.r(i789[7], i789[8], 0, i788, 'highDecelClip')
  i788.pitchMultiplier = i789[9]
  i788.lowPitchMin = i789[10]
  i788.lowPitchMax = i789[11]
  i788.highPitchMultiplier = i789[12]
  i788.maxRolloffDistance = i789[13]
  i788.dopplerLevel = i789[14]
  return i788
}

Deserializers["RaceCar"] = function (request, data, root) {
  var i790 = root || request.c( 'RaceCar' )
  var i791 = data
  i790.Owner = i791[0]
  i790.Score = i791[1]
  request.r(i791[2], i791[3], 0, i790, 'boosts')
  request.r(i791[4], i791[5], 0, i790, 'products')
  return i790
}

Deserializers["HealthController"] = function (request, data, root) {
  var i792 = root || request.c( 'HealthController' )
  var i793 = data
  i792.Health = i793[0]
  i792.MaxHealth = i793[1]
  i792.Shield = i793[2]
  i792.MaxShield = i793[3]
  request.r(i793[4], i793[5], 0, i792, 'MainScreen')
  request.r(i793[6], i793[7], 0, i792, 'LossScreen')
  request.r(i793[8], i793[9], 0, i792, 'boosts')
  return i792
}

Deserializers["Gun"] = function (request, data, root) {
  var i794 = root || request.c( 'Gun' )
  var i795 = data
  request.r(i795[0], i795[1], 0, i794, 'rocketPrefab')
  request.r(i795[2], i795[3], 0, i794, 'aim')
  request.r(i795[4], i795[5], 0, i794, 'carUserControl')
  request.r(i795[6], i795[7], 0, i794, 'products')
  return i794
}

Deserializers["JustWheelMeshes"] = function (request, data, root) {
  var i796 = root || request.c( 'JustWheelMeshes' )
  var i797 = data
  var i799 = i797[0]
  var i798 = []
  for(var i = 0; i < i799.length; i += 2) {
  request.r(i799[i + 0], i799[i + 1], 2, i798, '')
  }
  i796.m_WheelMeshes = i798
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i801 = data
  request.r(i801[0], i801[1], 0, i800, 'animatorController')
  i800.updateMode = i801[2]
  var i803 = i801[3]
  var i802 = []
  for(var i = 0; i < i803.length; i += 2) {
  request.r(i803[i + 0], i803[i + 1], 2, i802, '')
  }
  i800.humanBones = i802
  i800.enabled = !!i801[4]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i807 = data
  i806.enabled = !!i807[0]
  request.r(i807[1], i807[2], 0, i806, 'sharedMaterial')
  var i809 = i807[3]
  var i808 = []
  for(var i = 0; i < i809.length; i += 2) {
  request.r(i809[i + 0], i809[i + 1], 2, i808, '')
  }
  i806.sharedMaterials = i808
  i806.receiveShadows = !!i807[4]
  i806.shadowCastingMode = i807[5]
  i806.sortingLayerID = i807[6]
  i806.sortingOrder = i807[7]
  i806.lightmapIndex = i807[8]
  i806.lightmapSceneIndex = i807[9]
  i806.lightmapScaleOffset = new pc.Vec4( i807[10], i807[11], i807[12], i807[13] )
  i806.lightProbeUsage = i807[14]
  i806.reflectionProbeUsage = i807[15]
  request.r(i807[16], i807[17], 0, i806, 'sharedMesh')
  var i811 = i807[18]
  var i810 = []
  for(var i = 0; i < i811.length; i += 2) {
  request.r(i811[i + 0], i811[i + 1], 2, i810, '')
  }
  i806.bones = i810
  i806.updateWhenOffscreen = !!i807[19]
  i806.localBounds = i807[20]
  request.r(i807[21], i807[22], 0, i806, 'rootBone')
  var i813 = i807[23]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i813[i + 0]) );
  }
  i806.blendShapesWeights = i812
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i817 = data
  i816.weight = i817[0]
  return i816
}

Deserializers["BlobShadowMovement"] = function (request, data, root) {
  var i818 = root || request.c( 'BlobShadowMovement' )
  var i819 = data
  request.r(i819[0], i819[1], 0, i818, 'Target')
  i818.Offset = new pc.Vec3( i819[2], i819[3], i819[4] )
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i821 = data
  request.r(i821[0], i821[1], 0, i820, 'clip')
  i820.playOnAwake = !!i821[2]
  i820.loop = !!i821[3]
  i820.enabled = !!i821[4]
  return i820
}

Deserializers["WheelEffects"] = function (request, data, root) {
  var i822 = root || request.c( 'WheelEffects' )
  var i823 = data
  request.r(i823[0], i823[1], 0, i822, 'SkidTrailPrefab')
  request.r(i823[2], i823[3], 0, i822, 'skidParticles')
  return i822
}

Deserializers["Rocket"] = function (request, data, root) {
  var i824 = root || request.c( 'Rocket' )
  var i825 = data
  request.r(i825[0], i825[1], 0, i824, 'jetStream')
  request.r(i825[2], i825[3], 0, i824, 'explosionPrefab')
  return i824
}

Deserializers["Explosion"] = function (request, data, root) {
  var i826 = root || request.c( 'Explosion' )
  var i827 = data
  request.r(i827[0], i827[1], 0, i826, 'explosionParticleSystem')
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i829 = data
  i828.pivot = new pc.Vec2( i829[0], i829[1] )
  i828.anchorMin = new pc.Vec2( i829[2], i829[3] )
  i828.anchorMax = new pc.Vec2( i829[4], i829[5] )
  i828.sizeDelta = new pc.Vec2( i829[6], i829[7] )
  i828.anchoredPosition3D = new pc.Vec3( i829[8], i829[9], i829[10] )
  i828.rotation = new pc.Quat(i829[11], i829[12], i829[13], i829[14])
  i828.scale = new pc.Vec3( i829[15], i829[16], i829[17] )
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i831 = data
  i830.cullTransparentMesh = !!i831[0]
  return i830
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i832 = root || request.c( 'UnityEngine.UI.Image' )
  var i833 = data
  request.r(i833[0], i833[1], 0, i832, 'm_Sprite')
  i832.m_Type = i833[2]
  i832.m_PreserveAspect = !!i833[3]
  i832.m_FillCenter = !!i833[4]
  i832.m_FillMethod = i833[5]
  i832.m_FillAmount = i833[6]
  i832.m_FillClockwise = !!i833[7]
  i832.m_FillOrigin = i833[8]
  i832.m_UseSpriteMesh = !!i833[9]
  i832.m_PixelsPerUnitMultiplier = i833[10]
  request.r(i833[11], i833[12], 0, i832, 'm_Material')
  i832.m_Maskable = !!i833[13]
  i832.m_Color = new pc.Color(i833[14], i833[15], i833[16], i833[17])
  i832.m_RaycastTarget = !!i833[18]
  return i832
}

Deserializers["UIActiveBoost"] = function (request, data, root) {
  var i834 = root || request.c( 'UIActiveBoost' )
  var i835 = data
  i834.TimeLeft = i835[0]
  request.r(i835[1], i835[2], 0, i834, 'imgIcon')
  request.r(i835[3], i835[4], 0, i834, 'txtTimer')
  var i837 = i835[5]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( request.d('UIActiveBoost+SpriteByKind', i837[i + 0]) );
  }
  i834.sprites = i836
  i834.Kind = i835[6]
  return i834
}

Deserializers["UIActiveBoost+SpriteByKind"] = function (request, data, root) {
  var i840 = root || request.c( 'UIActiveBoost+SpriteByKind' )
  var i841 = data
  i840.Kind = i841[0]
  request.r(i841[1], i841[2], 0, i840, 'Sprite')
  return i840
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i842 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i843 = data
  i842.m_IgnoreLayout = !!i843[0]
  i842.m_MinWidth = i843[1]
  i842.m_MinHeight = i843[2]
  i842.m_PreferredWidth = i843[3]
  i842.m_PreferredHeight = i843[4]
  i842.m_FlexibleWidth = i843[5]
  i842.m_FlexibleHeight = i843[6]
  i842.m_LayoutPriority = i843[7]
  return i842
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i844 = root || request.c( 'UnityEngine.UI.Text' )
  var i845 = data
  i844.m_FontData = request.d('UnityEngine.UI.FontData', i845[0], i844.m_FontData)
  i844.m_Text = i845[1]
  request.r(i845[2], i845[3], 0, i844, 'm_Material')
  i844.m_Maskable = !!i845[4]
  i844.m_Color = new pc.Color(i845[5], i845[6], i845[7], i845[8])
  i844.m_RaycastTarget = !!i845[9]
  return i844
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i846 = root || request.c( 'UnityEngine.UI.FontData' )
  var i847 = data
  request.r(i847[0], i847[1], 0, i846, 'm_Font')
  i846.m_FontSize = i847[2]
  i846.m_FontStyle = i847[3]
  i846.m_BestFit = !!i847[4]
  i846.m_MinSize = i847[5]
  i846.m_MaxSize = i847[6]
  i846.m_Alignment = i847[7]
  i846.m_AlignByGeometry = !!i847[8]
  i846.m_RichText = !!i847[9]
  i846.m_HorizontalOverflow = i847[10]
  i846.m_VerticalOverflow = i847[11]
  i846.m_LineSpacing = i847[12]
  return i846
}

Deserializers["TrackHandles"] = function (request, data, root) {
  var i848 = root || request.c( 'TrackHandles' )
  var i849 = data
  request.r(i849[0], i849[1], 0, i848, 'MainPath')
  i848.OnFinishReached = request.d('UnityEngine.Events.UnityEvent', i849[2], i848.OnFinishReached)
  request.r(i849[3], i849[4], 0, i848, 'Root')
  return i848
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i850 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i851 = data
  i850.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i851[0], i850.m_PersistentCalls)
  return i850
}

Deserializers["FinishTrigger"] = function (request, data, root) {
  var i852 = root || request.c( 'FinishTrigger' )
  var i853 = data
  request.r(i853[0], i853[1], 0, i852, 'trackHandles')
  return i852
}

Deserializers["PathCreation.PathCreator"] = function (request, data, root) {
  var i854 = root || request.c( 'PathCreation.PathCreator' )
  var i855 = data
  i854.editorData = request.d('PathCreation.PathCreatorData', i855[0], i854.editorData)
  i854.initialized = !!i855[1]
  return i854
}

Deserializers["PathCreation.PathCreatorData"] = function (request, data, root) {
  var i856 = root || request.c( 'PathCreation.PathCreatorData' )
  var i857 = data
  i856.vertexPathMaxAngleError = i857[0]
  i856.vertexPathMinVertexSpacing = i857[1]
  i856.showTransformTool = !!i857[2]
  i856.showPathBounds = !!i857[3]
  i856.showPerSegmentBounds = !!i857[4]
  i856.displayAnchorPoints = !!i857[5]
  i856.displayControlPoints = !!i857[6]
  i856.bezierHandleScale = i857[7]
  i856.globalDisplaySettingsFoldout = !!i857[8]
  i856.keepConstantHandleSize = !!i857[9]
  i856.showNormalsInVertexMode = !!i857[10]
  i856.showBezierPathInVertexMode = !!i857[11]
  i856.showDisplayOptions = !!i857[12]
  i856.showPathOptions = !!i857[13]
  i856.showVertexPathDisplayOptions = !!i857[14]
  i856.showVertexPathOptions = !!i857[15]
  i856.showNormals = !!i857[16]
  i856.showNormalsHelpInfo = !!i857[17]
  i856.tabIndex = i857[18]
  i856._bezierPath = request.d('PathCreation.BezierPath', i857[19], i856._bezierPath)
  i856.vertexPathUpToDate = !!i857[20]
  return i856
}

Deserializers["PathCreation.BezierPath"] = function (request, data, root) {
  var i858 = root || request.c( 'PathCreation.BezierPath' )
  var i859 = data
  var i861 = i859[0]
  var i860 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i861.length; i += 3) {
    i860.add(new pc.Vec3( i861[i + 0], i861[i + 1], i861[i + 2] ));
  }
  i858.points = i860
  i858.isClosed = !!i859[1]
  i858.space = i859[2]
  i858.controlMode = i859[3]
  i858.autoControlLength = i859[4]
  i858.boundsUpToDate = !!i859[5]
  var i863 = i859[6]
  var i862 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i863.length; i += 1) {
    i862.add(i863[i + 0]);
  }
  i858.perAnchorNormalsAngle = i862
  i858.globalNormalsAngle = i859[7]
  i858.flipNormals = !!i859[8]
  return i858
}

Deserializers["GameManager"] = function (request, data, root) {
  var i868 = root || request.c( 'GameManager' )
  var i869 = data
  request.r(i869[0], i869[1], 0, i868, 'MainCamera')
  i868.LandscapeFov = i869[2]
  i868.PortraitFov = i869[3]
  i868.WheatCullDistance = i869[4]
  request.r(i869[5], i869[6], 0, i868, 'CountdownWidget')
  request.r(i869[7], i869[8], 0, i868, 'TutorialWindow')
  request.r(i869[9], i869[10], 0, i868, 'MainBackroundImage')
  request.r(i869[11], i869[12], 0, i868, 'WinScreen')
  request.r(i869[13], i869[14], 0, i868, 'LoseScreen')
  request.r(i869[15], i869[16], 0, i868, 'MainScreen')
  request.r(i869[17], i869[18], 0, i868, 'btnLeft')
  request.r(i869[19], i869[20], 0, i868, 'btnRight')
  request.r(i869[21], i869[22], 0, i868, 'healthBar')
  var i871 = i869[23]
  var i870 = []
  for(var i = 0; i < i871.length; i += 2) {
  request.r(i871[i + 0], i871[i + 1], 2, i870, '')
  }
  i868.Opponents = i870
  request.r(i869[24], i869[25], 0, i868, 'PlayerCar')
  request.r(i869[26], i869[27], 0, i868, 'CarUserControl')
  i868.Position = i869[28]
  request.r(i869[29], i869[30], 0, i868, 'LastCheckpoint')
  request.r(i869[31], i869[32], 0, i868, 'healthController')
  var i873 = i869[33]
  var i872 = []
  for(var i = 0; i < i873.length; i += 2) {
  request.r(i873[i + 0], i873[i + 1], 2, i872, '')
  }
  i868.drivers = i872
  var i875 = i869[34]
  var i874 = []
  for(var i = 0; i < i875.length; i += 2) {
  request.r(i875[i + 0], i875[i + 1], 2, i874, '')
  }
  i868.trackPrefabs = i874
  request.r(i869[35], i869[36], 0, i868, 'trackParent')
  i868._WheatCullDistance = i869[37]
  request.r(i869[38], i869[39], 0, i868, 'trackContentGenerator')
  request.r(i869[40], i869[41], 0, i868, 'wheatGenerator')
  request.r(i869[42], i869[43], 0, i868, 'ghostReader')
  return i868
}

Deserializers["LunaUIFields"] = function (request, data, root) {
  var i878 = root || request.c( 'LunaUIFields' )
  var i879 = data
  request.r(i879[0], i879[1], 0, i878, 'ObjectiveHintText')
  i878.ObjectiveHintString = i879[2]
  request.r(i879[3], i879[4], 0, i878, 'LevelFailedButtonText')
  i878.LevelFailedButtonString = i879[5]
  request.r(i879[6], i879[7], 0, i878, 'LevelCompleteButtonText')
  i878.LevelCompleteButtonString = i879[8]
  return i878
}

Deserializers["WheatGenerator"] = function (request, data, root) {
  var i880 = root || request.c( 'WheatGenerator' )
  var i881 = data
  request.r(i881[0], i881[1], 0, i880, 'wheatPiece')
  request.r(i881[2], i881[3], 0, i880, 'wheatParent')
  request.r(i881[4], i881[5], 0, i880, 'trackContentGenerator')
  request.r(i881[6], i881[7], 0, i880, 'carUserControl')
  return i880
}

Deserializers["Products"] = function (request, data, root) {
  var i882 = root || request.c( 'Products' )
  var i883 = data
  i882.OnProductsNumberChanged = request.d('ProductsEvent', i883[0], i882.OnProductsNumberChanged)
  return i882
}

Deserializers["ProductsEvent"] = function (request, data, root) {
  var i884 = root || request.c( 'ProductsEvent' )
  var i885 = data
  i884.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i885[0], i884.m_PersistentCalls)
  return i884
}

Deserializers["TrackContentGenerator"] = function (request, data, root) {
  var i886 = root || request.c( 'TrackContentGenerator' )
  var i887 = data
  var i889 = i887[0]
  var i888 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i889.length; i += 2) {
  request.r(i889[i + 0], i889[i + 1], 1, i888, '')
  }
  i886.AlreadyGenerated = i888
  request.r(i887[1], i887[2], 0, i886, 'parentForPlacing')
  var i891 = i887[3]
  var i890 = []
  for(var i = 0; i < i891.length; i += 2) {
  request.r(i891[i + 0], i891[i + 1], 2, i890, '')
  }
  i886.obstaclesPrefabs = i890
  var i893 = i887[4]
  var i892 = []
  for(var i = 0; i < i893.length; i += 2) {
  request.r(i893[i + 0], i893[i + 1], 2, i892, '')
  }
  i886.hardObstaclesPrefabs = i892
  var i895 = i887[5]
  var i894 = []
  for(var i = 0; i < i895.length; i += 2) {
  request.r(i895[i + 0], i895[i + 1], 2, i894, '')
  }
  i886.bonusesPrefabs = i894
  request.r(i887[6], i887[7], 0, i886, 'configFile')
  request.r(i887[8], i887[9], 0, i886, 'products')
  request.r(i887[10], i887[11], 0, i886, 'healthController')
  request.r(i887[12], i887[13], 0, i886, 'boosts')
  return i886
}

Deserializers["Boosts"] = function (request, data, root) {
  var i898 = root || request.c( 'Boosts' )
  var i899 = data
  var i901 = i899[0]
  var i900 = new (System.Collections.Generic.List$1(Bridge.ns('Boosts+DataItem')))
  for(var i = 0; i < i901.length; i += 1) {
    i900.add(request.d('Boosts+DataItem', i901[i + 0]));
  }
  i898.Data = i900
  return i898
}

Deserializers["Boosts+DataItem"] = function (request, data, root) {
  var i904 = root || request.c( 'Boosts+DataItem' )
  var i905 = data
  i904.Kind = i905[0]
  i904.TimeLeft = i905[1]
  return i904
}

Deserializers["GhostWriter"] = function (request, data, root) {
  var i906 = root || request.c( 'GhostWriter' )
  var i907 = data
  i906.timer = i907[0]
  var i909 = i907[1]
  var i908 = new (System.Collections.Generic.List$1(Bridge.ns('GhostWriter+Entry')))
  for(var i = 0; i < i909.length; i += 1) {
    i908.add(request.d('GhostWriter+Entry', i909[i + 0]));
  }
  i906.data = i908
  request.r(i907[2], i907[3], 0, i906, 'carUserControl')
  return i906
}

Deserializers["GhostWriter+Entry"] = function (request, data, root) {
  var i912 = root || request.c( 'GhostWriter+Entry' )
  var i913 = data
  i912.kind = i913[0]
  i912.time = i913[1]
  i912.distance = i913[2]
  i912.sideOffset = i913[3]
  i912.speed = i913[4]
  return i912
}

Deserializers["GhostReader"] = function (request, data, root) {
  var i914 = root || request.c( 'GhostReader' )
  var i915 = data
  request.r(i915[0], i915[1], 0, i914, 'ghost')
  request.r(i915[2], i915[3], 0, i914, 'pathCreator')
  i914.timer = i915[4]
  var i917 = i915[5]
  var i916 = new (System.Collections.Generic.List$1(Bridge.ns('GhostReader+Entry')))
  for(var i = 0; i < i917.length; i += 1) {
    i916.add(request.d('GhostReader+Entry', i917[i + 0]));
  }
  i914.data = i916
  return i914
}

Deserializers["GhostReader+Entry"] = function (request, data, root) {
  var i920 = root || request.c( 'GhostReader+Entry' )
  var i921 = data
  i920.kind = i921[0]
  i920.time = i921[1]
  i920.distance = i921[2]
  i920.sideOffset = i921[3]
  i920.speed = i921[4]
  return i920
}

Deserializers["UnityStandardAssets.Cameras.AutoCam"] = function (request, data, root) {
  var i922 = root || request.c( 'UnityStandardAssets.Cameras.AutoCam' )
  var i923 = data
  i922.m_MoveSpeed = i923[0]
  i922.m_TurnSpeed = i923[1]
  i922.m_RollSpeed = i923[2]
  i922.m_FollowVelocity = !!i923[3]
  i922.m_FollowTilt = !!i923[4]
  i922.m_SpinTurnLimit = i923[5]
  i922.m_TargetVelocityLowerLimit = i923[6]
  i922.m_SmoothTurnTime = i923[7]
  request.r(i923[8], i923[9], 0, i922, 'm_Target')
  i922.m_AutoTargetPlayer = !!i923[10]
  i922.m_UpdateType = i923[11]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i925 = data
  i924.enabled = !!i925[0]
  i924.aspect = i925[1]
  i924.orthographic = !!i925[2]
  i924.orthographicSize = i925[3]
  i924.backgroundColor = new pc.Color(i925[4], i925[5], i925[6], i925[7])
  i924.nearClipPlane = i925[8]
  i924.farClipPlane = i925[9]
  i924.fieldOfView = i925[10]
  i924.depth = i925[11]
  i924.clearFlags = i925[12]
  i924.cullingMask = i925[13]
  i924.rect = i925[14]
  request.r(i925[15], i925[16], 0, i924, 'targetTexture')
  return i924
}

Deserializers["CameraFollower"] = function (request, data, root) {
  var i926 = root || request.c( 'CameraFollower' )
  var i927 = data
  request.r(i927[0], i927[1], 0, i926, 'Target')
  i926.PositionOffset = new pc.Vec3( i927[2], i927[3], i927[4] )
  i926.RotationOffset = new pc.Vec3( i927[5], i927[6], i927[7] )
  i926.CameraSpeed = i927[8]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i929 = data
  i928.enabled = !!i929[0]
  i928.type = i929[1]
  i928.color = new pc.Color(i929[2], i929[3], i929[4], i929[5])
  i928.cullingMask = i929[6]
  i928.intensity = i929[7]
  i928.range = i929[8]
  i928.spotAngle = i929[9]
  i928.shadows = i929[10]
  i928.shadowNormalBias = i929[11]
  i928.shadowBias = i929[12]
  i928.shadowStrength = i929[13]
  i928.lightmapBakeType = i929[14]
  i928.renderMode = i929[15]
  request.r(i929[16], i929[17], 0, i928, 'cookie')
  i928.cookieSize = i929[18]
  return i928
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i930 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i931 = data
  request.r(i931[0], i931[1], 0, i930, 'm_FirstSelected')
  i930.m_sendNavigationEvents = !!i931[2]
  i930.m_DragThreshold = i931[3]
  return i930
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i932 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i933 = data
  i932.m_HorizontalAxis = i933[0]
  i932.m_VerticalAxis = i933[1]
  i932.m_SubmitButton = i933[2]
  i932.m_CancelButton = i933[3]
  i932.m_InputActionsPerSecond = i933[4]
  i932.m_RepeatDelay = i933[5]
  i932.m_ForceModuleActive = !!i933[6]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i935 = data
  i934.enabled = !!i935[0]
  i934.planeDistance = i935[1]
  i934.referencePixelsPerUnit = i935[2]
  i934.isFallbackOverlay = !!i935[3]
  i934.renderMode = i935[4]
  i934.renderOrder = i935[5]
  i934.sortingLayerName = i935[6]
  i934.sortingOrder = i935[7]
  i934.scaleFactor = i935[8]
  request.r(i935[9], i935[10], 0, i934, 'worldCamera')
  i934.overrideSorting = !!i935[11]
  i934.pixelPerfect = !!i935[12]
  i934.targetDisplay = i935[13]
  i934.overridePixelPerfect = !!i935[14]
  return i934
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i936 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i937 = data
  i936.m_UiScaleMode = i937[0]
  i936.m_ReferencePixelsPerUnit = i937[1]
  i936.m_ScaleFactor = i937[2]
  i936.m_ReferenceResolution = new pc.Vec2( i937[3], i937[4] )
  i936.m_ScreenMatchMode = i937[5]
  i936.m_MatchWidthOrHeight = i937[6]
  i936.m_PhysicalUnit = i937[7]
  i936.m_FallbackScreenDPI = i937[8]
  i936.m_DefaultSpriteDPI = i937[9]
  i936.m_DynamicPixelsPerUnit = i937[10]
  return i936
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i938 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i939 = data
  i938.m_IgnoreReversedGraphics = !!i939[0]
  i938.m_BlockingObjects = i939[1]
  i938.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i939[2] )
  return i938
}

Deserializers["Countdown"] = function (request, data, root) {
  var i940 = root || request.c( 'Countdown' )
  var i941 = data
  request.r(i941[0], i941[1], 0, i940, 'CountdownText')
  request.r(i941[2], i941[3], 0, i940, 'Go_Image')
  request.r(i941[4], i941[5], 0, i940, 'Outline')
  request.r(i941[6], i941[7], 0, i940, 'MainWindow')
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i943 = data
  i942.m_Alpha = i943[0]
  i942.m_Interactable = !!i943[1]
  i942.m_BlocksRaycasts = !!i943[2]
  i942.m_IgnoreParentGroups = !!i943[3]
  i942.enabled = !!i943[4]
  return i942
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i944 = root || request.c( 'UnityEngine.UI.Outline' )
  var i945 = data
  i944.m_EffectColor = new pc.Color(i945[0], i945[1], i945[2], i945[3])
  i944.m_EffectDistance = new pc.Vec2( i945[4], i945[5] )
  i944.m_UseGraphicAlpha = !!i945[6]
  return i944
}

Deserializers["WinScreenWidget"] = function (request, data, root) {
  var i946 = root || request.c( 'WinScreenWidget' )
  var i947 = data
  request.r(i947[0], i947[1], 0, i946, 'RaceCar')
  request.r(i947[2], i947[3], 0, i946, 'WheatText')
  request.r(i947[4], i947[5], 0, i946, 'GemText')
  request.r(i947[6], i947[7], 0, i946, 'GameManager')
  request.r(i947[8], i947[9], 0, i946, 'products')
  return i946
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i948 = root || request.c( 'UnityEngine.UI.Button' )
  var i949 = data
  i948.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i949[0], i948.m_OnClick)
  i948.m_Navigation = request.d('UnityEngine.UI.Navigation', i949[1], i948.m_Navigation)
  i948.m_Transition = i949[2]
  i948.m_Colors = request.d('UnityEngine.UI.ColorBlock', i949[3], i948.m_Colors)
  i948.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i949[4], i948.m_SpriteState)
  i948.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i949[5], i948.m_AnimationTriggers)
  i948.m_Interactable = !!i949[6]
  request.r(i949[7], i949[8], 0, i948, 'm_TargetGraphic')
  return i948
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i950 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i951 = data
  i950.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i951[0], i950.m_PersistentCalls)
  return i950
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i952 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i953 = data
  i952.m_Mode = i953[0]
  request.r(i953[1], i953[2], 0, i952, 'm_SelectOnUp')
  request.r(i953[3], i953[4], 0, i952, 'm_SelectOnDown')
  request.r(i953[5], i953[6], 0, i952, 'm_SelectOnLeft')
  request.r(i953[7], i953[8], 0, i952, 'm_SelectOnRight')
  return i952
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i954 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i955 = data
  i954.m_NormalColor = new pc.Color(i955[0], i955[1], i955[2], i955[3])
  i954.m_HighlightedColor = new pc.Color(i955[4], i955[5], i955[6], i955[7])
  i954.m_PressedColor = new pc.Color(i955[8], i955[9], i955[10], i955[11])
  i954.m_SelectedColor = new pc.Color(i955[12], i955[13], i955[14], i955[15])
  i954.m_DisabledColor = new pc.Color(i955[16], i955[17], i955[18], i955[19])
  i954.m_ColorMultiplier = i955[20]
  i954.m_FadeDuration = i955[21]
  return i954
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i956 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i957 = data
  request.r(i957[0], i957[1], 0, i956, 'm_HighlightedSprite')
  request.r(i957[2], i957[3], 0, i956, 'm_PressedSprite')
  request.r(i957[4], i957[5], 0, i956, 'm_SelectedSprite')
  request.r(i957[6], i957[7], 0, i956, 'm_DisabledSprite')
  return i956
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i958 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i959 = data
  i958.m_NormalTrigger = i959[0]
  i958.m_HighlightedTrigger = i959[1]
  i958.m_PressedTrigger = i959[2]
  i958.m_SelectedTrigger = i959[3]
  i958.m_DisabledTrigger = i959[4]
  return i958
}

Deserializers["EndGameButton"] = function (request, data, root) {
  var i960 = root || request.c( 'EndGameButton' )
  var i961 = data
  request.r(i961[0], i961[1], 0, i960, 'GameManager')
  return i960
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i962 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i963 = data
  request.r(i963[0], i963[1], 0, i962, 'm_ObjectArgument')
  i962.m_ObjectArgumentAssemblyTypeName = i963[2]
  i962.m_IntArgument = i963[3]
  i962.m_FloatArgument = i963[4]
  i962.m_StringArgument = i963[5]
  i962.m_BoolArgument = !!i963[6]
  return i962
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i964 = root || request.c( 'UnityEngine.UI.Slider' )
  var i965 = data
  request.r(i965[0], i965[1], 0, i964, 'm_FillRect')
  request.r(i965[2], i965[3], 0, i964, 'm_HandleRect')
  i964.m_Direction = i965[4]
  i964.m_MinValue = i965[5]
  i964.m_MaxValue = i965[6]
  i964.m_WholeNumbers = !!i965[7]
  i964.m_Value = i965[8]
  i964.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i965[9], i964.m_OnValueChanged)
  i964.m_Navigation = request.d('UnityEngine.UI.Navigation', i965[10], i964.m_Navigation)
  i964.m_Transition = i965[11]
  i964.m_Colors = request.d('UnityEngine.UI.ColorBlock', i965[12], i964.m_Colors)
  i964.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i965[13], i964.m_SpriteState)
  i964.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i965[14], i964.m_AnimationTriggers)
  i964.m_Interactable = !!i965[15]
  request.r(i965[16], i965[17], 0, i964, 'm_TargetGraphic')
  return i964
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i966 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i967 = data
  i966.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i967[0], i966.m_PersistentCalls)
  return i966
}

Deserializers["WheatSliderWidget"] = function (request, data, root) {
  var i968 = root || request.c( 'WheatSliderWidget' )
  var i969 = data
  request.r(i969[0], i969[1], 0, i968, 'Slider')
  request.r(i969[2], i969[3], 0, i968, 'gameManager')
  request.r(i969[4], i969[5], 0, i968, 'BarIconImage')
  request.r(i969[6], i969[7], 0, i968, 'WheatImage')
  i968.MaxWheat = i969[8]
  request.r(i969[9], i969[10], 0, i968, 'products')
  return i968
}

Deserializers["LongTapButton"] = function (request, data, root) {
  var i970 = root || request.c( 'LongTapButton' )
  var i971 = data
  i970.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i971[0], i970.OnMouseDownEvent)
  i970.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i971[1], i970.OnMouseUpEvent)
  return i970
}

Deserializers["HealthBar"] = function (request, data, root) {
  var i972 = root || request.c( 'HealthBar' )
  var i973 = data
  request.r(i973[0], i973[1], 0, i972, 'Slider')
  request.r(i973[2], i973[3], 0, i972, 'HealthProvider')
  request.r(i973[4], i973[5], 0, i972, 'BarIconImage')
  return i972
}

Deserializers["ShootButtonCtrl"] = function (request, data, root) {
  var i974 = root || request.c( 'ShootButtonCtrl' )
  var i975 = data
  request.r(i975[0], i975[1], 0, i974, 'txtPew')
  request.r(i975[2], i975[3], 0, i974, 'txtNoAmmo')
  request.r(i975[4], i975[5], 0, i974, 'products')
  return i974
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i976 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i977 = data
  i976.m_Spacing = i977[0]
  i976.m_ChildForceExpandWidth = !!i977[1]
  i976.m_ChildForceExpandHeight = !!i977[2]
  i976.m_ChildControlWidth = !!i977[3]
  i976.m_ChildControlHeight = !!i977[4]
  i976.m_ChildScaleWidth = !!i977[5]
  i976.m_ChildScaleHeight = !!i977[6]
  i976.m_Padding = UnityEngine.RectOffset.FromPaddings(i977[7], i977[8], i977[9], i977[10])
  i976.m_ChildAlignment = i977[11]
  return i976
}

Deserializers["BoostsPanelCtrl"] = function (request, data, root) {
  var i978 = root || request.c( 'BoostsPanelCtrl' )
  var i979 = data
  request.r(i979[0], i979[1], 0, i978, 'boosts')
  request.r(i979[2], i979[3], 0, i978, 'wgtBoostPrefab')
  return i978
}

Deserializers["RocketsPanelCtrl"] = function (request, data, root) {
  var i980 = root || request.c( 'RocketsPanelCtrl' )
  var i981 = data
  request.r(i981[0], i981[1], 0, i980, 'products')
  request.r(i981[2], i981[3], 0, i980, 'rocketPrefab')
  return i980
}

Deserializers["ShieldBar"] = function (request, data, root) {
  var i982 = root || request.c( 'ShieldBar' )
  var i983 = data
  request.r(i983[0], i983[1], 0, i982, 'slider')
  request.r(i983[2], i983[3], 0, i982, 'healthController')
  request.r(i983[4], i983[5], 0, i982, 'barIconImage')
  request.r(i983[6], i983[7], 0, i982, 'allUI')
  return i982
}

Deserializers["TimeSinceStartup"] = function (request, data, root) {
  var i984 = root || request.c( 'TimeSinceStartup' )
  var i985 = data
  request.r(i985[0], i985[1], 0, i984, 'Text')
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i987 = data
  i986.name = i987[0]
  i986.atlasId = i987[1]
  i986.mipmapCount = i987[2]
  i986.hdr = !!i987[3]
  i986.size = i987[4]
  i986.anisoLevel = i987[5]
  i986.filterMode = i987[6]
  i986.wrapMode = i987[7]
  var i989 = i987[8]
  var i988 = []
  for(var i = 0; i < i989.length; i += 4) {
    i988.push( UnityEngine.Rect.MinMaxRect(i989[i + 0], i989[i + 1], i989[i + 2], i989[i + 3]) );
  }
  i986.rects = i988
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i993 = data
  i992.name = i993[0]
  i992.index = i993[1]
  i992.startup = !!i993[2]
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i995 = data
  i994.ambientIntensity = i995[0]
  i994.reflectionIntensity = i995[1]
  i994.ambientMode = i995[2]
  i994.ambientLight = new pc.Color(i995[3], i995[4], i995[5], i995[6])
  i994.ambientSkyColor = new pc.Color(i995[7], i995[8], i995[9], i995[10])
  i994.ambientGroundColor = new pc.Color(i995[11], i995[12], i995[13], i995[14])
  i994.ambientEquatorColor = new pc.Color(i995[15], i995[16], i995[17], i995[18])
  i994.fogColor = new pc.Color(i995[19], i995[20], i995[21], i995[22])
  i994.fogEndDistance = i995[23]
  i994.fogStartDistance = i995[24]
  i994.fogDensity = i995[25]
  i994.fog = !!i995[26]
  request.r(i995[27], i995[28], 0, i994, 'skybox')
  i994.fogMode = i995[29]
  var i997 = i995[30]
  var i996 = []
  for(var i = 0; i < i997.length; i += 1) {
    i996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i997[i + 0]) );
  }
  i994.lightmaps = i996
  i994.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i995[31], i994.lightProbes)
  i994.lightmapsMode = i995[32]
  i994.environmentLightingMode = i995[33]
  i994.ambientProbe = new pc.SphericalHarmonicsL2(i995[34])
  request.r(i995[35], i995[36], 0, i994, 'customReflection')
  request.r(i995[37], i995[38], 0, i994, 'defaultReflection')
  i994.defaultReflectionMode = i995[39]
  i994.defaultReflectionResolution = i995[40]
  i994.sunLightObjectId = i995[41]
  i994.pixelLightCount = i995[42]
  i994.defaultReflectionHDR = !!i995[43]
  i994.hasLightDataAsset = !!i995[44]
  i994.hasManualGenerate = !!i995[45]
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1001 = data
  request.r(i1001[0], i1001[1], 0, i1000, 'lightmapColor')
  request.r(i1001[2], i1001[3], 0, i1000, 'lightmapDirection')
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1002 = root || new UnityEngine.LightProbes()
  var i1003 = data
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1011 = data
  i1010.name = i1011[0]
  var i1013 = i1011[1]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1013[i + 0]) );
  }
  i1010.passes = i1012
  var i1015 = i1011[2]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1015[i + 0]) );
  }
  i1010.defaultParameterValues = i1014
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1018 = root || new pc.UnityShaderPass()
  var i1019 = data
  i1018.passType = i1019[0]
  i1018.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1019[1], i1018.zTest)
  i1018.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1019[2], i1018.zWrite)
  i1018.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1019[3], i1018.culling)
  i1018.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1019[4], i1018.blending)
  i1018.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1019[5], i1018.alphaBlending)
  i1018.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1019[6], i1018.colorWriteMask)
  i1018.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1019[7], i1018.offsetUnits)
  i1018.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1019[8], i1018.offsetFactor)
  i1018.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1019[9], i1018.stencilRef)
  i1018.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1019[10], i1018.stencilReadMask)
  i1018.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1019[11], i1018.stencilWriteMask)
  i1018.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1019[12], i1018.stencilOp)
  i1018.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1019[13], i1018.stencilOpFront)
  i1018.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1019[14], i1018.stencilOpBack)
  var i1021 = i1019[15]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1021[i + 0]) );
  }
  i1018.tags = i1020
  var i1023 = i1019[16]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 1) {
    i1022.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1023[i + 0]) );
  }
  i1018.variants = i1022
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1025 = data
  i1024.val = i1025[0]
  i1024.name = i1025[1]
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1027 = data
  i1026.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1027[0], i1026.src)
  i1026.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1027[1], i1026.dst)
  i1026.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1027[2], i1026.op)
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1029 = data
  i1028.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1029[0], i1028.pass)
  i1028.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1029[1], i1028.fail)
  i1028.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1029[2], i1028.zFail)
  i1028.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1029[3], i1028.comp)
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1033 = data
  i1032.name = i1033[0]
  i1032.value = i1033[1]
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1037 = data
  var i1039 = i1037[0]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( i1039[i + 0] );
  }
  i1036.keywords = i1038
  i1036.vertexProgram = i1037[1]
  i1036.fragmentProgram = i1037[2]
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1045 = data
  i1044.name = i1045[0]
  i1044.type = i1045[1]
  i1044.value = new pc.Vec4( i1045[2], i1045[3], i1045[4], i1045[5] )
  i1044.textureValue = i1045[6]
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1047 = data
  i1046.name = i1047[0]
  request.r(i1047[1], i1047[2], 0, i1046, 'texture')
  i1046.aabb = i1047[3]
  i1046.vertices = i1047[4]
  i1046.triangles = i1047[5]
  i1046.textureRect = UnityEngine.Rect.MinMaxRect(i1047[6], i1047[7], i1047[8], i1047[9])
  i1046.packedRect = UnityEngine.Rect.MinMaxRect(i1047[10], i1047[11], i1047[12], i1047[13])
  i1046.border = new pc.Vec4( i1047[14], i1047[15], i1047[16], i1047[17] )
  i1046.transparency = i1047[18]
  i1046.bounds = i1047[19]
  i1046.pixelsPerUnit = i1047[20]
  i1046.textureWidth = i1047[21]
  i1046.textureHeight = i1047[22]
  i1046.nativeSize = new pc.Vec2( i1047[23], i1047[24] )
  i1046.pivot = new pc.Vec2( i1047[25], i1047[26] )
  i1046.textureRectOffset = new pc.Vec2( i1047[27], i1047[28] )
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1049 = data
  i1048.name = i1049[0]
  i1048.wrapMode = i1049[1]
  i1048.isLooping = !!i1049[2]
  i1048.length = i1049[3]
  var i1051 = i1049[4]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1051[i + 0]) );
  }
  i1048.curves = i1050
  var i1053 = i1049[5]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1053[i + 0]) );
  }
  i1048.events = i1052
  i1048.halfPrecision = !!i1049[6]
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1057 = data
  i1056.path = i1057[0]
  i1056.componentType = i1057[1]
  i1056.property = i1057[2]
  i1056.keys = i1057[3]
  var i1059 = i1057[4]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1059[i + 0]) );
  }
  i1056.objectReferenceKeys = i1058
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1063 = data
  i1062.time = i1063[0]
  request.r(i1063[1], i1063[2], 0, i1062, 'value')
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1067 = data
  i1066.functionName = i1067[0]
  i1066.floatParameter = i1067[1]
  i1066.intParameter = i1067[2]
  i1066.stringParameter = i1067[3]
  request.r(i1067[4], i1067[5], 0, i1066, 'objectReferenceParameter')
  i1066.time = i1067[6]
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1069 = data
  i1068.name = i1069[0]
  i1068.ascent = i1069[1]
  i1068.originalLineHeight = i1069[2]
  i1068.fontSize = i1069[3]
  var i1071 = i1069[4]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1071[i + 0]) );
  }
  i1068.characterInfo = i1070
  request.r(i1069[5], i1069[6], 0, i1068, 'texture')
  i1068.originalFontSize = i1069[7]
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1075 = data
  i1074.index = i1075[0]
  i1074.advance = i1075[1]
  i1074.bearing = i1075[2]
  i1074.glyphWidth = i1075[3]
  i1074.glyphHeight = i1075[4]
  i1074.minX = i1075[5]
  i1074.maxX = i1075[6]
  i1074.minY = i1075[7]
  i1074.maxY = i1075[8]
  i1074.uvBottomLeftX = i1075[9]
  i1074.uvBottomLeftY = i1075[10]
  i1074.uvBottomRightX = i1075[11]
  i1074.uvBottomRightY = i1075[12]
  i1074.uvTopLeftX = i1075[13]
  i1074.uvTopLeftY = i1075[14]
  i1074.uvTopRightX = i1075[15]
  i1074.uvTopRightY = i1075[16]
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1077 = data
  i1076.name = i1077[0]
  var i1079 = i1077[1]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1079[i + 0]) );
  }
  i1076.states = i1078
  var i1081 = i1077[2]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1081[i + 0]) );
  }
  i1076.layers = i1080
  var i1083 = i1077[3]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1083[i + 0]) );
  }
  i1076.parameters = i1082
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1087 = data
  i1086.cycleOffset = i1087[0]
  i1086.cycleOffsetParameter = i1087[1]
  i1086.cycleOffsetParameterActive = !!i1087[2]
  i1086.mirror = !!i1087[3]
  i1086.mirrorParameter = i1087[4]
  i1086.mirrorParameterActive = !!i1087[5]
  i1086.motionId = i1087[6]
  i1086.nameHash = i1087[7]
  i1086.fullPathHash = i1087[8]
  i1086.speed = i1087[9]
  i1086.speedParameter = i1087[10]
  i1086.speedParameterActive = !!i1087[11]
  i1086.tag = i1087[12]
  i1086.name = i1087[13]
  i1086.writeDefaultValues = !!i1087[14]
  var i1089 = i1087[15]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1089[i + 0]) );
  }
  i1086.transitions = i1088
  var i1091 = i1087[16]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 2) {
  request.r(i1091[i + 0], i1091[i + 1], 2, i1090, '')
  }
  i1086.behaviours = i1090
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1095 = data
  i1094.fullPath = i1095[0]
  i1094.canTransitionToSelf = !!i1095[1]
  i1094.duration = i1095[2]
  i1094.exitTime = i1095[3]
  i1094.hasExitTime = !!i1095[4]
  i1094.hasFixedDuration = !!i1095[5]
  i1094.interruptionSource = i1095[6]
  i1094.offset = i1095[7]
  i1094.orderedInterruption = !!i1095[8]
  i1094.destinationStateNameHash = i1095[9]
  i1094.destinationStateMachineId = i1095[10]
  i1094.isExit = !!i1095[11]
  i1094.mute = !!i1095[12]
  i1094.solo = !!i1095[13]
  var i1097 = i1095[14]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1097[i + 0]) );
  }
  i1094.conditions = i1096
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1103 = data
  i1102.blendingMode = i1103[0]
  i1102.defaultWeight = i1103[1]
  i1102.name = i1103[2]
  i1102.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1103[3], i1102.stateMachine)
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1105 = data
  i1104.id = i1105[0]
  i1104.defaultStateNameHash = i1105[1]
  var i1107 = i1105[2]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1107[i + 0]) );
  }
  i1104.entryTransitions = i1106
  var i1109 = i1105[3]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1109[i + 0]) );
  }
  i1104.anyStateTransitions = i1108
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1113 = data
  i1112.destinationStateNameHash = i1113[0]
  i1112.destinationStateMachineId = i1113[1]
  i1112.isExit = !!i1113[2]
  i1112.mute = !!i1113[3]
  i1112.solo = !!i1113[4]
  var i1115 = i1113[5]
  var i1114 = []
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1115[i + 0]) );
  }
  i1112.conditions = i1114
  return i1112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1119 = data
  i1118.defaultBool = !!i1119[0]
  i1118.defaultFloat = i1119[1]
  i1118.defaultInt = i1119[2]
  i1118.name = i1119[3]
  i1118.nameHash = i1119[4]
  i1118.type = i1119[5]
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1121 = data
  i1120.name = i1121[0]
  i1120.bytes64 = i1121[1]
  i1120.data = i1121[2]
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1123 = data
  var i1125 = i1123[0]
  var i1124 = []
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1125[i + 0]) );
  }
  i1122.files = i1124
  i1122.componentToPrefabIds = i1123[1]
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1129 = data
  i1128.path = i1129[0]
  request.r(i1129[1], i1129[2], 0, i1128, 'unityObject')
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1131 = data
  var i1133 = i1131[0]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1133[i + 0]) );
  }
  i1130.scriptsExecutionOrder = i1132
  var i1135 = i1131[1]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1135[i + 0]) );
  }
  i1130.sortingLayers = i1134
  var i1137 = i1131[2]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1137[i + 0]) );
  }
  i1130.cullingLayers = i1136
  i1130.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1131[3], i1130.timeSettings)
  i1130.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1131[4], i1130.physicsSettings)
  i1130.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1131[5], i1130.physics2DSettings)
  i1130.removeShadows = !!i1131[6]
  i1130.autoInstantiatePrefabs = !!i1131[7]
  i1130.enableAutoInstancing = !!i1131[8]
  i1130.lightmapEncodingQuality = i1131[9]
  i1130.desiredColorSpace = i1131[10]
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1141 = data
  i1140.name = i1141[0]
  i1140.value = i1141[1]
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1145 = data
  i1144.id = i1145[0]
  i1144.name = i1145[1]
  i1144.value = i1145[2]
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1149 = data
  i1148.id = i1149[0]
  i1148.name = i1149[1]
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1151 = data
  i1150.fixedDeltaTime = i1151[0]
  i1150.maximumDeltaTime = i1151[1]
  i1150.timeScale = i1151[2]
  i1150.maximumParticleTimestep = i1151[3]
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1153 = data
  i1152.gravity = new pc.Vec3( i1153[0], i1153[1], i1153[2] )
  i1152.defaultSolverIterations = i1153[3]
  i1152.autoSyncTransforms = !!i1153[4]
  i1152.autoSimulation = !!i1153[5]
  var i1155 = i1153[6]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1155[i + 0]) );
  }
  i1152.collisionMatrix = i1154
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1159 = data
  i1158.enabled = !!i1159[0]
  i1158.layerId = i1159[1]
  i1158.otherLayerId = i1159[2]
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1161 = data
  request.r(i1161[0], i1161[1], 0, i1160, 'material')
  i1160.gravity = new pc.Vec2( i1161[2], i1161[3] )
  i1160.positionIterations = i1161[4]
  i1160.velocityIterations = i1161[5]
  i1160.velocityThreshold = i1161[6]
  i1160.maxLinearCorrection = i1161[7]
  i1160.maxAngularCorrection = i1161[8]
  i1160.maxTranslationSpeed = i1161[9]
  i1160.maxRotationSpeed = i1161[10]
  i1160.timeToSleep = i1161[11]
  i1160.linearSleepTolerance = i1161[12]
  i1160.angularSleepTolerance = i1161[13]
  i1160.defaultContactOffset = i1161[14]
  i1160.autoSimulation = !!i1161[15]
  i1160.queriesHitTriggers = !!i1161[16]
  i1160.queriesStartInColliders = !!i1161[17]
  i1160.callbacksOnDisable = !!i1161[18]
  i1160.reuseCollisionCallbacks = !!i1161[19]
  i1160.autoSyncTransforms = !!i1161[20]
  var i1163 = i1161[21]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1163[i + 0]) );
  }
  i1160.collisionMatrix = i1162
  return i1160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1167 = data
  i1166.enabled = !!i1167[0]
  i1166.layerId = i1167[1]
  i1166.otherLayerId = i1167[2]
  return i1166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1171 = data
  i1170.weight = i1171[0]
  i1170.vertices = i1171[1]
  i1170.normals = i1171[2]
  i1170.tangents = i1171[3]
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1175 = data
  i1174.mode = i1175[0]
  i1174.parameter = i1175[1]
  i1174.threshold = i1175[2]
  return i1174
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startDelayMultiplier":4,"startLifetime":5,"startLifetimeMultiplier":6,"startSpeed":7,"startSpeedMultiplier":8,"startSize3D":9,"startSize":10,"startSizeMultiplier":11,"startSizeX":12,"startSizeXMultiplier":13,"startSizeY":14,"startSizeYMultiplier":15,"startSizeZ":16,"startSizeZMultiplier":17,"startRotation3D":18,"startRotation":19,"startRotationMultiplier":20,"startRotationX":21,"startRotationXMultiplier":22,"startRotationY":23,"startRotationYMultiplier":24,"startRotationZ":25,"startRotationZMultiplier":26,"startColor":27,"gravityModifier":28,"gravityModifierMultiplier":29,"simulationSpace":30,"customSimulationSpace":31,"simulationSpeed":33,"useUnscaledTime":34,"scalingMode":35,"playOnAwake":36,"maxParticles":37,"emitterVelocityMode":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"m_Mode":0,"m_CurveMin":1,"m_CurveMax":2,"m_CurveMultiplier":3,"m_ConstantMin":4,"m_ConstantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"m_Mode":0,"m_GradientMin":1,"m_GradientMax":2,"m_ColorMin":3,"m_ColorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverTimeMultiplier":2,"rateOverDistance":3,"rateOverDistanceMultiplier":4,"bursts":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"xMultiplier":4,"yMultiplier":5,"zMultiplier":6,"separateAxes":7,"range":8},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"xMultiplier":4,"yMultiplier":5,"zMultiplier":6,"separateAxes":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusSpeedMultiplier":10,"radiusThickness":11,"angle":12,"length":13,"boxThickness":14,"meshShapeType":17,"mesh":18,"meshRenderer":20,"skinnedMeshRenderer":22,"useMeshMaterialIndex":24,"meshMaterialIndex":25,"useMeshColors":26,"normalOffset":27,"arc":28,"arcMode":29,"arcSpread":30,"arcSpeed":31,"arcSpeedMultiplier":32,"donutRadius":33,"position":34,"rotation":37,"scale":40},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"size":1,"sizeMultiplier":2,"x":3,"y":4,"z":5,"xMultiplier":6,"yMultiplier":7,"zMultiplier":8,"separateAxes":9,"range":10},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"size":1,"sizeMultiplier":2,"x":3,"y":4,"z":5,"xMultiplier":6,"yMultiplier":7,"zMultiplier":8,"separateAxes":9},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"frameOverTimeMultiplier":7,"startFrame":8,"startFrameMultiplier":9,"cycleCount":10,"rowIndex":11,"flipU":12,"flipV":13,"spriteCount":14},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"xMultiplier":4,"yMultiplier":5,"zMultiplier":6,"speedModifier":7,"speedModifierMultiplier":8,"space":9},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"strengthXMultiplier":5,"strengthYMultiplier":6,"strengthZMultiplier":7,"frequency":8,"damping":9,"octaveCount":10,"octaveMultiplier":11,"octaveScale":12,"quality":13,"scrollSpeed":14,"scrollSpeedMultiplier":15,"remapEnabled":16,"remapX":17,"remapY":18,"remapZ":19,"remapXMultiplier":20,"remapYMultiplier":21,"remapZMultiplier":22,"positionAmount":23,"rotationAmount":24,"sizeAmount":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2,"curveMultiplier":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"xMultiplier":4,"yMultiplier":5,"zMultiplier":6,"space":7,"randomized":8},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"limitMultiplier":5,"limitXMultiplier":6,"limitYMultiplier":7,"limitZMultiplier":8,"dampen":9,"separateAxes":10,"space":11,"drag":12,"dragMultiplier":13,"multiplyDragByParticleSize":14,"multiplyDragByParticleVelocity":15},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"playOnAwake":2,"loop":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"customReflection":35,"defaultReflection":37,"defaultReflectionMode":39,"defaultReflectionResolution":40,"sunLightObjectId":41,"pixelLightCount":42,"defaultReflectionHDR":43,"hasLightDataAsset":44,"hasManualGenerate":45},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"name":0,"passes":1,"defaultParameterValues":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"passType":0,"zTest":1,"zWrite":2,"culling":3,"blending":4,"alphaBlending":5,"colorWriteMask":6,"offsetUnits":7,"offsetFactor":8,"stencilRef":9,"stencilReadMask":10,"stencilWriteMask":11,"stencilOp":12,"stencilOpFront":13,"stencilOpBack":14,"tags":15,"variants":16},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"keywords":0,"vertexProgram":1,"fragmentProgram":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"removeShadows":6,"autoInstantiatePrefabs":7,"enableAutoInstancing":8,"lightmapEncodingQuality":9,"desiredColorSpace":10},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"autoSyncTransforms":4,"autoSimulation":5,"collisionMatrix":6},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"87":[88],"89":[88],"90":[88],"91":[88],"92":[88],"93":[88],"94":[37],"95":[55],"96":[21],"97":[21],"98":[21],"99":[21],"100":[21],"101":[21],"102":[21],"103":[104],"105":[104],"106":[104],"107":[104],"108":[104],"109":[104],"110":[104],"111":[104],"112":[104],"113":[104],"114":[104],"115":[104],"116":[104],"117":[55],"118":[9],"119":[120],"121":[120],"71":[42],"13":[15],"122":[42],"77":[76],"25":[22],"24":[39],"27":[22],"123":[124],"125":[42],"126":[43,42],"73":[71],"45":[43,42],"127":[42],"72":[71],"128":[42],"129":[42],"81":[42],"130":[42],"49":[42],"131":[42],"132":[42],"133":[42],"134":[43,42],"135":[43,42],"136":[42],"137":[42],"138":[42],"78":[42],"48":[43,42],"139":[42],"140":[69],"141":[69],"70":[69],"142":[69],"143":[55],"144":[55],"145":[42],"146":[43,42],"147":[9],"148":[43,42],"149":[43,42],"150":[9,43,42],"151":[42,43],"152":[42]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.BoxCollider","UnityEngine.MonoBehaviour","WheatPieceRandomizer","WheatPieceDestroyer","WheatOptimizer","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Texture2D","UnityEngine.MeshCollider","DamagingObstacle","UnityEngine.ParticleSystemRenderer","UnityEngine.ParticleSystem","UnityEngine.SphereCollider","LootableItem","UnselectedColliderDrawer","LightPole","UnityEngine.LODGroup","UnityEngine.Rigidbody","CarController","UnityEngine.GameObject","WheelEffects","CarUserControl","GhostWriter","UnityStandardAssets.Vehicles.Car.CarAudio","RaceCar","Boosts","Products","HealthController","UnityEngine.CanvasGroup","Gun","JustWheelMeshes","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.SkinnedMeshRenderer","BlobShadowMovement","UnityEngine.AudioSource","Rocket","Explosion","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UIActiveBoost","UnityEngine.UI.Text","UnityEngine.UI.LayoutElement","UnityEngine.Font","TrackHandles","PathCreation.PathCreator","FinishTrigger","GameManager","UnityEngine.Camera","Countdown","LongTapButton","HealthBar","TrackContentGenerator","WheatGenerator","GhostReader","LunaUIFields","UnityEngine.TextAsset","UnityStandardAssets.Cameras.AutoCam","UnityEngine.AudioListener","CameraFollower","UnityEngine.LightProbeGroup","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Outline","WinScreenWidget","UnityEngine.UI.Button","EndGameButton","UnityEngine.UI.Slider","WheatSliderWidget","ShootButtonCtrl","UnityEngine.UI.HorizontalLayoutGroup","BoostsPanelCtrl","RocketsPanelCtrl","ShieldBar","TimeSinceStartup","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","ButtonInput","SWS.PathRenderer","UnityEngine.LineRenderer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TextContainer"]

Deserializers.unityVersion = "2019.4.16f1";

Deserializers.applicationIdentifier = "com.DefaultCompany.TribezRacingPlayable";

Deserializers.disableAntiAliasing = true;

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

