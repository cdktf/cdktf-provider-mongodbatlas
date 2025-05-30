# `flexCluster` Submodule <a name="`flexCluster` Submodule" id="@cdktf/provider-mongodbatlas.flexCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FlexCluster <a name="FlexCluster" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/flex_cluster mongodbatlas_flex_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import flex_cluster

flexCluster.FlexCluster(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  project_id: str,
  provider_settings: FlexClusterProviderSettings,
  tags: typing.Mapping[str] = None,
  termination_protection_enabled: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.Initializer.parameter.name">name</a></code> | <code>str</code> | Human-readable label that identifies the instance. |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Unique 24-hexadecimal character string that identifies the project. |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.Initializer.parameter.providerSettings">provider_settings</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettings">FlexClusterProviderSettings</a></code> | Group of cloud provider settings that configure the provisioned MongoDB flex cluster. |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Map that contains key-value pairs between 1 to 255 characters in length for tagging and categorizing the instance. |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.Initializer.parameter.terminationProtectionEnabled">termination_protection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag that indicates whether termination protection is enabled on the cluster. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.Initializer.parameter.name"></a>

- *Type:* str

Human-readable label that identifies the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/flex_cluster#name FlexCluster#name}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.Initializer.parameter.projectId"></a>

- *Type:* str

Unique 24-hexadecimal character string that identifies the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/flex_cluster#project_id FlexCluster#project_id}

---

##### `provider_settings`<sup>Required</sup> <a name="provider_settings" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.Initializer.parameter.providerSettings"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettings">FlexClusterProviderSettings</a>

Group of cloud provider settings that configure the provisioned MongoDB flex cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/flex_cluster#provider_settings FlexCluster#provider_settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Map that contains key-value pairs between 1 to 255 characters in length for tagging and categorizing the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/flex_cluster#tags FlexCluster#tags}

---

##### `termination_protection_enabled`<sup>Optional</sup> <a name="termination_protection_enabled" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.Initializer.parameter.terminationProtectionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag that indicates whether termination protection is enabled on the cluster.

If set to `true`, MongoDB Cloud won't delete the cluster. If set to `false`, MongoDB Cloud will delete the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/flex_cluster#termination_protection_enabled FlexCluster#termination_protection_enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.putProviderSettings">put_provider_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.resetTerminationProtectionEnabled">reset_termination_protection_enabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_provider_settings` <a name="put_provider_settings" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.putProviderSettings"></a>

```python
def put_provider_settings(
  backing_provider_name: str,
  region_name: str
) -> None
```

###### `backing_provider_name`<sup>Required</sup> <a name="backing_provider_name" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.putProviderSettings.parameter.backingProviderName"></a>

- *Type:* str

Cloud service provider on which MongoDB Cloud provisioned the flex cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/flex_cluster#backing_provider_name FlexCluster#backing_provider_name}

---

###### `region_name`<sup>Required</sup> <a name="region_name" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.putProviderSettings.parameter.regionName"></a>

- *Type:* str

Human-readable label that identifies the geographic location of your MongoDB flex cluster.

The region you choose can affect network latency for clients accessing your databases. For a complete list of region names, see [AWS](https://docs.atlas.mongodb.com/reference/amazon-aws/#std-label-amazon-aws), [GCP](https://docs.atlas.mongodb.com/reference/google-gcp/), and [Azure](https://docs.atlas.mongodb.com/reference/microsoft-azure/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/flex_cluster#region_name FlexCluster#region_name}

---

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_termination_protection_enabled` <a name="reset_termination_protection_enabled" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.resetTerminationProtectionEnabled"></a>

```python
def reset_termination_protection_enabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a FlexCluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import flex_cluster

flexCluster.FlexCluster.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import flex_cluster

flexCluster.FlexCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import flex_cluster

flexCluster.FlexCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import flex_cluster

flexCluster.FlexCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a FlexCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FlexCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FlexCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/flex_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FlexCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.backupSettings">backup_settings</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference">FlexClusterBackupSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.clusterType">cluster_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.connectionStrings">connection_strings</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference">FlexClusterConnectionStringsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.createDate">create_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.mongoDbVersion">mongo_db_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.providerSettings">provider_settings</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference">FlexClusterProviderSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.stateName">state_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.versionReleaseSystem">version_release_system</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.providerSettingsInput">provider_settings_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettings">FlexClusterProviderSettings</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.terminationProtectionEnabledInput">termination_protection_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.terminationProtectionEnabled">termination_protection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backup_settings`<sup>Required</sup> <a name="backup_settings" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.backupSettings"></a>

```python
backup_settings: FlexClusterBackupSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference">FlexClusterBackupSettingsOutputReference</a>

---

##### `cluster_type`<sup>Required</sup> <a name="cluster_type" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.clusterType"></a>

```python
cluster_type: str
```

- *Type:* str

---

##### `connection_strings`<sup>Required</sup> <a name="connection_strings" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.connectionStrings"></a>

```python
connection_strings: FlexClusterConnectionStringsOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference">FlexClusterConnectionStringsOutputReference</a>

---

##### `create_date`<sup>Required</sup> <a name="create_date" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.createDate"></a>

```python
create_date: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mongo_db_version`<sup>Required</sup> <a name="mongo_db_version" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.mongoDbVersion"></a>

```python
mongo_db_version: str
```

- *Type:* str

---

##### `provider_settings`<sup>Required</sup> <a name="provider_settings" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.providerSettings"></a>

```python
provider_settings: FlexClusterProviderSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference">FlexClusterProviderSettingsOutputReference</a>

---

##### `state_name`<sup>Required</sup> <a name="state_name" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.stateName"></a>

```python
state_name: str
```

- *Type:* str

---

##### `version_release_system`<sup>Required</sup> <a name="version_release_system" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.versionReleaseSystem"></a>

```python
version_release_system: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `provider_settings_input`<sup>Optional</sup> <a name="provider_settings_input" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.providerSettingsInput"></a>

```python
provider_settings_input: typing.Union[IResolvable, FlexClusterProviderSettings]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettings">FlexClusterProviderSettings</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `termination_protection_enabled_input`<sup>Optional</sup> <a name="termination_protection_enabled_input" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.terminationProtectionEnabledInput"></a>

```python
termination_protection_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `termination_protection_enabled`<sup>Required</sup> <a name="termination_protection_enabled" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.terminationProtectionEnabled"></a>

```python
termination_protection_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.flexCluster.FlexCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FlexClusterBackupSettings <a name="FlexClusterBackupSettings" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import flex_cluster

flexCluster.FlexClusterBackupSettings()
```


### FlexClusterConfig <a name="FlexClusterConfig" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import flex_cluster

flexCluster.FlexClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  project_id: str,
  provider_settings: FlexClusterProviderSettings,
  tags: typing.Mapping[str] = None,
  termination_protection_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConfig.property.name">name</a></code> | <code>str</code> | Human-readable label that identifies the instance. |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConfig.property.projectId">project_id</a></code> | <code>str</code> | Unique 24-hexadecimal character string that identifies the project. |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConfig.property.providerSettings">provider_settings</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettings">FlexClusterProviderSettings</a></code> | Group of cloud provider settings that configure the provisioned MongoDB flex cluster. |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Map that contains key-value pairs between 1 to 255 characters in length for tagging and categorizing the instance. |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConfig.property.terminationProtectionEnabled">termination_protection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag that indicates whether termination protection is enabled on the cluster. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Human-readable label that identifies the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/flex_cluster#name FlexCluster#name}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Unique 24-hexadecimal character string that identifies the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/flex_cluster#project_id FlexCluster#project_id}

---

##### `provider_settings`<sup>Required</sup> <a name="provider_settings" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConfig.property.providerSettings"></a>

```python
provider_settings: FlexClusterProviderSettings
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettings">FlexClusterProviderSettings</a>

Group of cloud provider settings that configure the provisioned MongoDB flex cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/flex_cluster#provider_settings FlexCluster#provider_settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Map that contains key-value pairs between 1 to 255 characters in length for tagging and categorizing the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/flex_cluster#tags FlexCluster#tags}

---

##### `termination_protection_enabled`<sup>Optional</sup> <a name="termination_protection_enabled" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConfig.property.terminationProtectionEnabled"></a>

```python
termination_protection_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag that indicates whether termination protection is enabled on the cluster.

If set to `true`, MongoDB Cloud won't delete the cluster. If set to `false`, MongoDB Cloud will delete the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/flex_cluster#termination_protection_enabled FlexCluster#termination_protection_enabled}

---

### FlexClusterConnectionStrings <a name="FlexClusterConnectionStrings" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStrings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStrings.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import flex_cluster

flexCluster.FlexClusterConnectionStrings()
```


### FlexClusterProviderSettings <a name="FlexClusterProviderSettings" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import flex_cluster

flexCluster.FlexClusterProviderSettings(
  backing_provider_name: str,
  region_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettings.property.backingProviderName">backing_provider_name</a></code> | <code>str</code> | Cloud service provider on which MongoDB Cloud provisioned the flex cluster. |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettings.property.regionName">region_name</a></code> | <code>str</code> | Human-readable label that identifies the geographic location of your MongoDB flex cluster. |

---

##### `backing_provider_name`<sup>Required</sup> <a name="backing_provider_name" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettings.property.backingProviderName"></a>

```python
backing_provider_name: str
```

- *Type:* str

Cloud service provider on which MongoDB Cloud provisioned the flex cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/flex_cluster#backing_provider_name FlexCluster#backing_provider_name}

---

##### `region_name`<sup>Required</sup> <a name="region_name" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettings.property.regionName"></a>

```python
region_name: str
```

- *Type:* str

Human-readable label that identifies the geographic location of your MongoDB flex cluster.

The region you choose can affect network latency for clients accessing your databases. For a complete list of region names, see [AWS](https://docs.atlas.mongodb.com/reference/amazon-aws/#std-label-amazon-aws), [GCP](https://docs.atlas.mongodb.com/reference/google-gcp/), and [Azure](https://docs.atlas.mongodb.com/reference/microsoft-azure/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/flex_cluster#region_name FlexCluster#region_name}

---

## Classes <a name="Classes" id="Classes"></a>

### FlexClusterBackupSettingsOutputReference <a name="FlexClusterBackupSettingsOutputReference" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import flex_cluster

flexCluster.FlexClusterBackupSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettings">FlexClusterBackupSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettingsOutputReference.property.internalValue"></a>

```python
internal_value: FlexClusterBackupSettings
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterBackupSettings">FlexClusterBackupSettings</a>

---


### FlexClusterConnectionStringsOutputReference <a name="FlexClusterConnectionStringsOutputReference" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import flex_cluster

flexCluster.FlexClusterConnectionStringsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.property.standard">standard</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.property.standardSrv">standard_srv</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStrings">FlexClusterConnectionStrings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `standard`<sup>Required</sup> <a name="standard" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.property.standard"></a>

```python
standard: str
```

- *Type:* str

---

##### `standard_srv`<sup>Required</sup> <a name="standard_srv" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.property.standardSrv"></a>

```python
standard_srv: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStringsOutputReference.property.internalValue"></a>

```python
internal_value: FlexClusterConnectionStrings
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterConnectionStrings">FlexClusterConnectionStrings</a>

---


### FlexClusterProviderSettingsOutputReference <a name="FlexClusterProviderSettingsOutputReference" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import flex_cluster

flexCluster.FlexClusterProviderSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.property.providerName">provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.property.backingProviderNameInput">backing_provider_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.property.regionNameInput">region_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.property.backingProviderName">backing_provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.property.regionName">region_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettings">FlexClusterProviderSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disk_size_gb`<sup>Required</sup> <a name="disk_size_gb" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

---

##### `backing_provider_name_input`<sup>Optional</sup> <a name="backing_provider_name_input" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.property.backingProviderNameInput"></a>

```python
backing_provider_name_input: str
```

- *Type:* str

---

##### `region_name_input`<sup>Optional</sup> <a name="region_name_input" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.property.regionNameInput"></a>

```python
region_name_input: str
```

- *Type:* str

---

##### `backing_provider_name`<sup>Required</sup> <a name="backing_provider_name" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.property.backingProviderName"></a>

```python
backing_provider_name: str
```

- *Type:* str

---

##### `region_name`<sup>Required</sup> <a name="region_name" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.property.regionName"></a>

```python
region_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettingsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FlexClusterProviderSettings]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.flexCluster.FlexClusterProviderSettings">FlexClusterProviderSettings</a>]

---



